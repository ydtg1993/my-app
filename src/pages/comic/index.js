import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {BackIcon, HomeIcon, BodyWrapper, TitleBox, TopPanel, ContentPanel} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory} from 'react-router-dom';

const Comic = (props) => {
    useEffect(() => {

    }, []);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };

    const loadingAnimation = () => {
        return (
            <>
                <Skeleton variant="rect" height={200}/>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={200}/>
            </>
        );
    };

    return (
        <BodyWrapper>
            <TopPanel>
                <BackIcon onClick={handleGoBack} />
                <TitleBox><span>ccc</span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopPanel>
            <ContentPanel>
                {loadingAnimation()}
            </ContentPanel>
        </BodyWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(null, mapDispatchToProps)(Comic);
