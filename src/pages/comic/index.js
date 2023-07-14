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
    ComicInfoBox, CoverPart, InfoPart
} from './style';
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {ClearComic, GetComic} from "./store/actions";
import gif_finn from "../../resource/pics/finn.gif";

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
                        <LazyLoadImage src={comic.cover} alt="Image" effect="blur"
                                       placeholderSrc={gif_finn}/>
                    </CoverPart>
                    <InfoPart>
                        <li className={"title"}>{comic.title}</li>
                        <li><label>作 者</label>{comic.author}</li>
                        <li><label>热 度</label>{comic.popularity}</li>
                        <li><label>标 签</label>{Object.entries(comic.label).map(([id, value]) => (
                            <span className={"tag"} key={"tag-"+id}>{value}</span>
                        ))}</li>
                        <li><div className={"description"}>{comic.description}</div></li>
                    </InfoPart>
                </ComicInfoBox>
            </>
        );
    };

    const loadedChapter = (loaded) => {
        if (loaded === false) {
            return (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            );
        }

        return (
            <ChapterBox/>
        );
    };

    return (
        <BodyWrapper>
            <TopPanel>
                <BackIcon onClick={handleGoBack}/>
                <TitleBox><span>{comic.title}</span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopPanel>
            {comic.title ? loadedComic(true) : loadedComic(false)}
            <ContentPanel>
                {comic.title ? loadedChapter(true) : loadedChapter(false)}
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
