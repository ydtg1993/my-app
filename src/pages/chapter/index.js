import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
/*other component*/
import {Link, useHistory, useParams} from 'react-router-dom';
import {TitleBox} from "../comic/style";
import {ClearChapter, GetChapter} from "./store/actions";
import {
    BtnPanel,
    ChapterImageList,
    ImageBox,
    PreviousIcon,
    NavPanel,
    NextIcon,
    ReaderStruct,
    ToolbarPanel,
    BackIcon,
    HomeIcon,
    Btn,
    BottomTip
} from "./style";
import {RecordReadHistory} from "../hall/ibook/store/actions";
import {Helmet} from "react-helmet";
import {WebHost} from "../../index";
import ErrorFallback from "../Err/errorBoundary";
import {ErrorBoundary} from "react-error-boundary";
import ImageLazy from "../component/ImageLazy";
import {img_blank} from "../../resource";

const Chapter = (props) => {
    const {comic_id,chapter_id} = useParams();
    const {chapter, getChapter, clearChapter, recordReadHistory} = props;
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const chapterListRef = useRef(null);
    const toolbarRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        let lastScrollTop = 0;
        const scrollToolbarInOut = () => {
            let currentScrollTop = chapterListRef.current.pageYOffset || chapterListRef.current.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                if (toolbarRef.current.style.display !== "none"){
                    toolbarRef.current.style.display = "none";
                }
            }else {
                //scroll up
                if (toolbarRef.current.style.display === "none"){
                    toolbarRef.current.style.display = "unset";
                }
            }
            lastScrollTop = currentScrollTop;
        };
        chapterListRef.current.addEventListener('scroll', scrollToolbarInOut);
        const clickToolbarInOut = () => {
            if (toolbarRef.current.style.display !== "none"){
                toolbarRef.current.style.display = "none";
            }else {
                toolbarRef.current.style.display = "unset";
            }
        };
        chapterListRef.current.addEventListener('click', clickToolbarInOut);
        getChapter(chapter_id);

        return () => {
            clearChapter();
            window.removeEventListener('resize', handleResize);
        };
    }, [chapter_id, clearChapter, getChapter, recordReadHistory]);

    useEffect(() => {
        if (chapter.size > 0) {
            recordReadHistory(chapter);
        }
    }, [chapter]);

    const history = useHistory();
    const handleGoBack = () => {
        history.push(`/comic/${comic_id}`)
    };

    const handlePreviousNext = (index) => {
        if(Array.isArray(chapter.get('previous_next'))){
            let id = chapter.get('previous_next')[index];
            if(id > 0) history.push(`/comic/${comic_id}/${id}`);
        }
    };

    const SetImgBox = (img, index) => {
        let height;
        let width;
        let rate = Math.round(img.w / img.h * 1000) / 1000;
        if (containerWidth >= 1024) {
            width = `1024`;
        } else {
            width = containerWidth;
        }
        height = `${width / rate - 2}`;
        return (
            <ImageBox key={index} style={{width: width + "px", height: height + "px"}}>
                <ImageLazy src={img_blank} data-src={img.s} alt={chapter.get('title')} options={{rootMargin: "0px 0px 100px 0px"}}/>
            </ImageBox>
        );
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Helmet>
                <title>{chapter.get('comic_title') + " " + chapter.get('title')} - 漫画汪</title>
                <meta name="description" content={`《${chapter.get('comic_title')}》全集,${chapter.get('comic_title')}`}/>
                <link rel="canonical" href={`${WebHost}comic/${chapter.get('comic_id')}/${chapter.get('id')}`}/>
            </Helmet>
            <ReaderStruct>
                <ToolbarPanel ref={toolbarRef}>
                    <NavPanel>
                        <TitleBox><h1>{chapter.get('title')}</h1></TitleBox>
                    </NavPanel>
                    <BtnPanel>
                        <Btn onClick={handleGoBack}>
                            <BackIcon/>
                            <span>返回</span>
                        </Btn>
                        <Btn onClick={()=>handlePreviousNext(0)}>
                            <PreviousIcon/>
                            <span>上章</span>
                        </Btn>
                        <Btn onClick={()=>handlePreviousNext(1)}>
                            <NextIcon/>
                            <span>下章</span>
                        </Btn>
                        <Link to="/"><HomeIcon/></Link>
                    </BtnPanel>
                </ToolbarPanel>
                <ChapterImageList ref={chapterListRef}>
                    {chapter.get('source') ? chapter.get('source').map((img, index) => (
                        SetImgBox(img, index)
                    )) : ''}
                    <BottomTip><span>到底了</span></BottomTip>
                </ChapterImageList>
            </ReaderStruct>
        </ErrorBoundary>
    );
};

const mapStateToProps = (state) => {
    return {
        chapter: state.chapter.get('chapter'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getChapter: async (id) => {
            await dispatch(GetChapter(id));
        },
        recordReadHistory: (chapter) => {
            let record = {
                comic_id: chapter.get('comic_id'),
                comic_title: chapter.get('comic_title'),
                comic_cover: chapter.get('comic_cover'),
                comic_author: chapter.get('comic_author'),
                comic_finish: chapter.get('comic_finish'),
                chapter_id: chapter.get('id'),
                chapter_title: chapter.get('title'),
                time: new Date().toLocaleString('zh-CN', {
                    timeZone: 'Asia/Shanghai',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })
            };
            dispatch(RecordReadHistory(record));
        },
        clearChapter: () => dispatch(ClearChapter())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
