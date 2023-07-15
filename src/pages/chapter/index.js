import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    BodyWrapper,
} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useHistory} from 'react-router-dom';

const Chapter = (props) => {

    useEffect(() => {

    }, []);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };


    return (
        <BodyWrapper>

        </BodyWrapper>
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
