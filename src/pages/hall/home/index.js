import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";
import {ComicBox, SeriesLabel, SeriesList} from "./style";
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import gif_finn from '../../../resource/home/finn.gif'
import {GetSeries} from "./store/actions";

const Home = (props) => {
    const {series, seriesEmpty,seriesPage, setCurrentPosition, getHomeSeries} = props;
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadMoreEnd, setLoadMoreEnd] = useState(0);

    const fetchData = async (page) => {
        await getHomeSeries(page);
    };

    const loadMoreData = async () => {
        if (!isLoading && seriesEmpty !== 1) {
            await fetchData(page+1);
            setPage((prevPage) => prevPage + 1);
        }else if(seriesEmpty === 1){
            setLoadMoreEnd(1);
        }
    };

    useEffect(() => {
        setCurrentPosition('home');
        if (isLoading) {
            if(seriesPage < page) {
                fetchData(page)
                    .then(() => setIsLoading(false))
                    .catch((error) => {
                        console.error(error);
                    });
            }else {
                setIsLoading(false)
            }
        }
    }, [setCurrentPosition, seriesPage,isLoading]);

    const loadingAnimation = () => {
        return (
            <>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240}/>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240}/>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240}/>
            </>
        );
    };

    const content = () => {
        return (
            <>
                {series.map((data) => (
                    <React.Fragment key={data.id}>
                        <SeriesLabel>
                            <b>{data.title}</b>
                        </SeriesLabel>
                        <SeriesList>
                            {data.comics.map((comic) => (
                                <ComicBox key={data.id+"-"+comic.id}>
                                    <div className={'imgBox'}>
                                        <LazyLoadImage src={comic.cover} alt="Image" effect="blur"
                                                       placeholderSrc={gif_finn}/>
                                    </div>
                                    <div className={'titleBox'}>
                                        <span>{comic.title}</span>
                                    </div>
                                </ComicBox>
                            ))}
                        </SeriesList>
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <BodyWrapper>
            <BodyComponent loadMoreData={loadMoreData} loadMoreEnd={loadMoreEnd}>
                {isLoading ? loadingAnimation() : content()}
            </BodyComponent>
            <NavComponent/>
        </BodyWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        series: state.home.get('series'),
        seriesPage : state.home.get('seriesPage'),
        seriesEmpty: state.home.get('seriesEmpty')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeSeries: (p) => dispatch(GetSeries(p)),
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
