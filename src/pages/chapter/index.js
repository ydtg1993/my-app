import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
/*other component*/
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {BackIcon, HomeIcon, TitleBox, TopNavPanel} from "../comic/style";
import {ClearChapter, GetChapter} from "./store/actions";
import {ChapterImageList, ImageBox, ReaderStruct} from "./style";
import gif_finn from "../../resource/pics/finn.gif";
import {RecordReadHistory} from "../hall/ibook/store/actions";
import {DetailStruct} from "../style";
import {Helmet} from "react-helmet";
import {WebHost} from "../../index";
import ErrorFallback from "../Err/errorBoundary";
import {ErrorBoundary} from "react-error-boundary";

const Chapter = (props) => {
    const {chapter_id} = useParams();
    const {chapter, getChapter, clearChapter, recordReadHistory, scrollPosition} = props;
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
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
        history.goBack();
    };

    const SetImg = (img, index) => {
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
                <LazyLoadImage
                    src={img.s}
                    effect="blur"
                    alt={chapter.get('title')}
                    placeholderSrc={gif_finn}
                    scrollPosition={scrollPosition}
                />
            </ImageBox>
        );
    };


    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Helmet>
                <title>{chapter.get('comic_title') + " " + chapter.get('title')} - 动漫汪</title>
                <meta name="description" content={`《${chapter.get('comic_title')}》全集,${chapter.get('comic_title')}`}/>
                <link rel="canonical" href={`${WebHost}comic/${chapter.get('comic_id')}/${chapter.get('id')}`}/>
            </Helmet>
            <ReaderStruct>
                <TopNavPanel>
                    <BackIcon onClick={handleGoBack}/>
                    <TitleBox><span>{chapter.get('title')}</span></TitleBox>
                    <Link to="/"><HomeIcon/></Link>
                </TopNavPanel>
                <ChapterImageList>
                    {chapter.get('source') ? chapter.get('source').map((img, index) => (
                        SetImg(img, index)
                    )) : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(trackWindowScroll(Chapter));
