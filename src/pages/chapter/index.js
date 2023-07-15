import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory} from 'react-router-dom';
import {BackIcon, DetailStruct, HomeIcon, TopNavPanel} from "../style";
import {TitleBox} from "../comic/style";

const Chapter = (props) => {

    useEffect(() => {

    }, []);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };


    return (
        <DetailStruct>
            <TopNavPanel>
                <BackIcon onClick={handleGoBack}/>
                <TitleBox><span></span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopNavPanel>
        </DetailStruct>
    );
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
