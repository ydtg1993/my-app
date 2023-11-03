import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    TitleBox,
    ChapterList,
    TopNavPanel, BackIcon, HomeIcon,
    ComicInfoBox, CoverPart, InfoPart, SubTitle, Description, Label, Tag
} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Link, useHistory, useParams} from 'react-router-dom';
import {ClearComic, GetChapters, GetComic} from "./store/actions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from '@mui/material/Button';
import {ComicBox, DetailStruct, RangeList} from "../style";
import {Helmet} from "react-helmet";
import {WebHost} from "../../index";
import ErrorFallback from "../Err/errorBoundary";
import {ErrorBoundary} from "react-error-boundary";
import ImageLazy from "../component/ImageLazy";
import {img_blank} from "../../resource";
import {Section} from "../hall/body/style";
import {GetReadComicRecord} from "../hall/ibook/store/actions";
import FooterComponent from "../hall/footer";

const Comic = (props) => {
    const {comic_id} = useParams();
    const {comic, getComic, clearComic, chapters, getChapters} = props;
    const [tab, setTab] = useState(0);
    const [readComicRecord, setReadComicRecord] = useState(null);

    useEffect(() => {
        getComic(comic_id);
        (async () => {
            let result = await GetReadComicRecord(parseInt(comic_id));
            if (result) setReadComicRecord(result);
        })();
        return () => {
            clearComic();
        };
    }, [comic_id, getComic, clearComic]);

    useEffect(() => {
        if (comic.chapters === null) {
            getChapters(comic_id);
        }
    }, [comic]);

    useEffect(() => {
        (async () => {
            let result = await GetReadComicRecord(parseInt(comic_id));
            if (result) setReadComicRecord(result);
        })();
    }, [readComicRecord]);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };

    const handleChapterClick = (chapterId) => {
        history.push(`/comic/${comic_id}/${chapterId}`);
    };

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    const handelReadComic = () => {
        if (readComicRecord !== null) {
            history.push(`/comic/${comic_id}/${readComicRecord.chapter_id}`);
            return;
        }
        history.push(`/comic/${comic_id}/${comic.first_chapter_id}`);
    };

    const loadedComic = () => {
        if (!comic.title) {
            return (
                <>
                    <Skeleton variant="rect" height={200}/>
                </>
            );
        }
        return (
            <>
                <ComicInfoBox>
                    <CoverPart>
                        <img src={comic.cover} alt="Image"/>
                    </CoverPart>
                    <InfoPart>
                        <li className={'trim_text'}><h2 className={'trim_text'}>{comic.title}</h2></li>
                        <li className={'trim_text'}><Label>作 者</Label>{comic.author}</li>
                        <li className={'trim_text'}><Label>热 度</Label>{comic.popularity}</li>
                        <li className={'trim_text'}><Label>标 签</Label>{Object.entries(comic.label).map(([id, value]) => (
                            <Tag key={"tag-" + id}>{value}</Tag>
                        ))}</li>
                        <li className={'trim_text'}>
                            <Description className={'scroll'}>{comic.description}</Description>
                        </li>
                        <li className={'btn trim_text'}>
                            {readComicRecord === null ?
                                (<Button onClick={handelReadComic} style={{background: '#feea9b'}} variant="outlined"
                                         size="small" href="#contained-buttons"><span>开始阅读</span></Button>) :
                                (<Button onClick={handelReadComic} style={{background: '#feea9b',maxWidth:'200px'}} variant="outlined"
                                         size="small"
                                         href="#contained-buttons"><span className={'trim_text'} title={readComicRecord.chapter_title}>继续阅读: {readComicRecord.chapter_title}</span></Button>)
                            }
                        </li>
                    </InfoPart>
                </ComicInfoBox>
            </>
        );
    };

    const loadedRecommendComic = () => {
        if (!comic.title) {
            return (
                <>
                    <Skeleton variant="rect" height={135}/>
                    <Skeleton variant="rect" height={135}/>
                </>
            );
        }

        return (
            <>
                <SubTitle><span>猜你喜欢</span></SubTitle>
                <RangeList>
                    {comic.recommend.map((r) => {
                        return (
                            <div key={r.id}>
                                <ComicBox>
                                    <Link to={`/comic/${r.id}`}>
                                        <div className={'imgBox'}>
                                            <ImageLazy src={img_blank} data-src={r.cover} alt={r.title}
                                                       options={{threshold: 0.1}}/>
                                        </div>
                                        <div className={'titleBox'}>
                                            <h3 className={'trim_text'}>{r.title}</h3>
                                        </div>
                                    </Link>
                                </ComicBox>
                            </div>)
                    })}
                </RangeList>
            </>
        )
    };

    const loadedChapter = () => {
        if (chapters.size === 0) {
            return (
                <>
                    <Skeleton variant="rect" height={50}/>
                    {[...Array(5)].map((_, index) => (
                        <div key={index} style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                            {[...Array(3)].map((_, index) => (
                                <div key={index} style={{margin: "0 5px 0"}}>
                                    <Skeleton/>
                                </div>
                            ))}
                        </div>
                    ))}
                </>
            );
        }

        const itemsPerPage = 20;
        const totalPages = Math.ceil(chapters.length / itemsPerPage);

        const newPaginatedChapters = [];
        for (let i = 0; i < totalPages; i++) {
            const startIndex = i * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageChapters = [...chapters].slice(startIndex, endIndex);
            newPaginatedChapters.push(pageChapters);
        }

        if (newPaginatedChapters.length === 0) {
            return (<></>);
        }

        return (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable auto tabs example"
                >
                    {newPaginatedChapters.map((page, index) => (
                        <Tab key={index} label={`序${index * itemsPerPage + 1} - ${(index + 1) * itemsPerPage}`}/>
                    ))}
                </Tabs>
                <ChapterList className={'scroll'}>
                    {newPaginatedChapters[tab].map((chapter) => (
                        <div key={chapter.id}>
                            <Button variant="outlined" onClick={() => handleChapterClick(chapter.id)}>
                                <h3 title={chapter.title} className={'trim_text'}>{chapter.title}</h3>
                            </Button>
                        </div>
                    ))}
                </ChapterList>
            </ErrorBoundary>
        );
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Helmet>
                <title>{comic.title ? comic.title + " 漫画详情" : "漫画详情"} - 漫画汪</title>
                <meta name="description"
                      content={comic.title ? `《${comic.title}》, 《${comic.title}》全集,${comic.description}` : ""}/>
                <link rel="canonical" href={`${WebHost}comic/${comic_id}`}/>
            </Helmet>
            <DetailStruct className={'scroll'} style={{overflowY:'scroll'}}>
                <div>
                    <TopNavPanel>
                        <BackIcon onClick={handleGoBack}/>
                        <TitleBox><h1 className={'trim_text'}>{comic.title}</h1></TitleBox>
                        <Link to="/" alt={comic.title}><HomeIcon/></Link>
                    </TopNavPanel>
                    <Section>
                        {loadedComic()}
                        {loadedChapter()}
                        {loadedRecommendComic()}
                    </Section>
                </div>
                <FooterComponent/>
            </DetailStruct>
        </ErrorBoundary>
    );
};

const mapStateToProps = (state) => {
    return {
        comic: state.comic.get('comic'),
        chapters: state.comic.get('chapters'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComic: async (id) => {
            await dispatch(GetComic(id));
        },
        getChapters: async (id) => {
            await dispatch(GetChapters(id));
        },
        clearComic: () => dispatch(ClearComic())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comic);
