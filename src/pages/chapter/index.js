import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
/*other component*/
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {BackIcon, HomeIcon, TopNavPanel} from "../style";
import {TitleBox} from "../comic/style";
import {ClearChapter, GetChapter} from "./store/actions";
import {ChapterImageList, ImageBox, ReaderStruct} from "./style";
import gif_finn from "../../resource/pics/finn.gif";

const Chapter = (props) => {
    const {chapter_id} = useParams();
    const {chapter, getChapter, clearChapter, scrollPosition} = props;
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
    }, []);

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
            <ImageBox key={index} style={{width:width+"px",height:height+"px"}}>
                <LazyLoadImage
                    src={img.s}
                    effect="blur"
                    alt={chapter.title}
                    placeholderSrc={gif_finn}
                    scrollPosition={scrollPosition}
                />
            </ImageBox>
        );
    };


    return (
        <ReaderStruct>
            <TopNavPanel>
                <BackIcon onClick={handleGoBack}/>
                <TitleBox><span>{chapter.title}</span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopNavPanel>
            <ChapterImageList>
                {chapter.source ? chapter.source.map((img,index) => (
                    SetImg(img,index)
                )) : ''}
            </ChapterImageList>
        </ReaderStruct>
    );
};

const mapStateToProps = (state) => {
    return {
        chapter:state.chapter.get('chapter'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getChapter: async (id) => {
            await dispatch(GetChapter(id));
        },
        clearChapter: () => dispatch(ClearChapter())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(trackWindowScroll(Chapter));
