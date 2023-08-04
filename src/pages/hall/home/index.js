import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {HallStruct} from "../../style";
import {SetCurrentPosition} from "../store/actions";
import {ComicBox, SeriesLabel, SeriesList} from "./style";
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {GetHomeSeries} from "./store/actions";
import {Link} from 'react-router-dom';

const Home = (props) => {
    const {series, seriesPage, setCurrentPosition, getHomeSeries} = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setCurrentPosition('home');
    }, []);

    useEffect(() => {
        if (seriesPage === 0) {
            (async () => {
                await getHomeSeries(seriesPage);
                setTimeout(() => setIsLoading(false), 300);
            })();
        } else {
            setIsLoading(false);
        }
    }, [getHomeSeries, seriesPage]);

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

    const loadMoreData = async () => {
        if (seriesPage > -1) {
            await getHomeSeries(seriesPage);
        }
    };

    const loadedContent = () => {
        return (
            <>
                {series.map((data) => (
                    <React.Fragment key={data.id}>
                        <SeriesLabel>
                            <b>{data.title}</b>
                        </SeriesLabel>
                        <SeriesList>
                            {data.comics.map((comic) => (
                                <ComicBox key={data.id + "-" + comic.id}>
                                    <Link to={`/comic/${comic.id}`}>
                                        <div className={'imgBox'}>
                                            <LazyLoadImage src={comic.cover} alt={comic.title} effect="blur"/>
                                        </div>
                                        <div className={'titleBox'}>
                                            <span>{comic.title}</span>
                                        </div>
                                    </Link>
                                </ComicBox>
                            ))}
                        </SeriesList>
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <HallStruct>
            <BodyComponent loadMoreData={loadMoreData} loadMorePage={seriesPage}>
                {isLoading ? loadingAnimation() : loadedContent()}
            </BodyComponent>
            <NavComponent/>
        </HallStruct>
    );
};

const mapStateToProps = (state) => {
    return {
        series: state.home.get('series'),
        seriesPage: state.home.get('seriesPage'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeSeries: async (p) => {
            await dispatch(GetHomeSeries(p));
        },
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
