import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {BackIcon, HomeIcon, BodyWrapper, TitleBox, TopPanel, ContentPanel} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {GetComic} from "./store/actions";

const Comic = (props) => {
    const { comic_id } = useParams();
    const { getComic } = props;

    useEffect(() => {
        getComic(comic_id);
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comic);
