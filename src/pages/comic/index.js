import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    BackIcon,
    HomeIcon,
    BodyWrapper,
    TitleBox,
    TopPanel,
    ContentPanel,
    ChapterBox,
    ComicInfoBox
} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {ClearComic, GetComic} from "./store/actions";

const Comic = (props) => {
    const {comic_id} = useParams();
    const {comic, getComic, clearComic} = props;

    useEffect(() => {
        getComic(comic_id);

        return () => {
            clearComic();
        };
    }, []);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };

    const loadingAnimation = () => {
        return (
            <>
                <Skeleton variant="rect" height={200}/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </>
        );
    };

    const loadedComic = () => {
        return (
            <>
                <ComicInfoBox/>
                <ChapterBox/>
            </>
        );
    };

    return (
        <BodyWrapper>
            <TopPanel>
                <BackIcon onClick={handleGoBack}/>
                <TitleBox><span>{comic.title}</span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopPanel>
            <ContentPanel>
                {comic.title ? loadedComic() : loadingAnimation()}
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
        clearComic: () => dispatch(ClearComic())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comic);
