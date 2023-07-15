import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {BackIcon, DetailStruct, HomeIcon, TopNavPanel} from "../style";
import {TitleBox} from "../comic/style";
import {ClearChapter, GetChapter} from "./store/actions";

const Chapter = (props) => {
    const {chapter_id} = useParams();
    const {chapter, getChapter, clearChapter} = props;

    useEffect(() => {
        getChapter(chapter_id);

        return () => {
            clearChapter();
        };
    }, []);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };


    return (
        <DetailStruct>
            <TopNavPanel>
                <BackIcon onClick={handleGoBack}/>
                <TitleBox><span>{chapter.title}</span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopNavPanel>
        </DetailStruct>
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

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
