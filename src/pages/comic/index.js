import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    TitleBox,
    ChapterList,
    TopNavPanel, BackIcon, HomeIcon,
    ComicInfoBox, CoverPart, InfoPart
} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Link, useHistory, useParams} from 'react-router-dom';
import {ClearComic, GetComic} from "./store/actions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from '@mui/material/Button';
import {DetailStruct} from "../style";
import {Helmet} from "react-helmet";
import {WebHost} from "../../index";
import ErrorFallback from "../Err/errorBoundary";
import {ErrorBoundary} from "react-error-boundary";

const Comic = (props) => {
    const {comic_id} = useParams();
    const {comic, getComic, clearComic} = props;
    const [tab, setTab] = useState(0);

    useEffect(() => {
        getComic(comic_id);

        return () => {
            clearComic();
        };
    }, [comic_id,getComic,clearComic]);

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

    const loadedComic = (loaded) => {
        if (loaded === false) {
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
                        <img src={comic.cover} alt="Image" />
                    </CoverPart>
                    <InfoPart>
                        <li><h2>{comic.title}</h2></li>
                        <li><label>作 者</label>{comic.author}</li>
                        <li><label>热 度</label>{comic.popularity}</li>
                        <li><label>标 签</label>{Object.entries(comic.label).map(([id, value]) => (
                            <span className={"tag"} key={"tag-" + id}>{value}</span>
                        ))}</li>
                        <li>
                            <div className={"description"}>{comic.description}</div>
                        </li>
                    </InfoPart>
                </ComicInfoBox>
            </>
        );
    };

    const loadedChapter = (loaded) => {
        if (loaded === false) {
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
        const totalPages = Math.ceil(comic.chapters.length / itemsPerPage);

        const newPaginatedChapters = [];
        for (let i = 0; i < totalPages; i++) {
            const startIndex = i * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageChapters = [...comic.chapters].slice(startIndex, endIndex);
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
                <ChapterList>
                    {newPaginatedChapters[tab].map((chapter) => (
                        <Button key={chapter.id} variant="outlined" onClick={() => handleChapterClick(chapter.id)}>
                            <h3>{chapter.title}</h3>
                        </Button>
                    ))}
                </ChapterList>
            </ErrorBoundary>
        );
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Helmet>
                <title>{comic.title ? comic.title+" 漫画详情":"漫画详情"} - 漫画汪</title>
                <meta name="description" content={comic.title ? `《${comic.title}》, 《${comic.title}》全集,${comic.description}` :""}/>
                <link rel="canonical" href={`${WebHost}comic/${comic_id}`}/>
            </Helmet>
            <DetailStruct>
                <TopNavPanel>
                    <BackIcon onClick={handleGoBack}/>
                    <TitleBox><h1>{comic.title}</h1></TitleBox>
                    <Link to="/" alt={comic.title}><HomeIcon/></Link>
                </TopNavPanel>
                {comic.title ? loadedComic(true) : loadedComic(false)}
                {comic.title ? loadedChapter(true) : loadedChapter(false)}
            </DetailStruct>
        </ErrorBoundary>
    );
};

const mapStateToProps = (state) => {
    return {
        comic: state.comic.get('comic'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComic: async (id) => {
            await dispatch(GetComic(id));
        },
        clearComic: () => dispatch(ClearComic())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comic);
