import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {SetCurrentPosition} from "../store/actions";
import {ComicBox} from "../../style"
import {MainStruct, SeriesLabel, SeriesList, TopTitle} from "./style";
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {GetHomeSeries} from "./store/actions";
import {Link} from 'react-router-dom';
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../Err/errorBoundary";
import {dog_home, img_blank} from "../../../resource";
import ImageLazy from "../../component/ImageLazy";

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
                            <h2>{data.title}</h2>
                        </SeriesLabel>
                        <SeriesList>
                            {data.comics.map((comic) => {
                                return (
                                    <ComicBox key={data.id + "-" + comic.id}>
                                        <Link to={`/comic/${comic.id}`}>
                                            <div className={'imgBox'}>
                                                <ImageLazy src={img_blank} data-src={comic.cover} alt={comic.title} options={{ threshold: 0.1 }}/>
                                            </div>
                                            <div className={'titleBox'}>
                                                <h3>{comic.title}</h3>
                                            </div>
                                        </Link>
                                    </ComicBox>)
                            })}
                        </SeriesList>
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MainStruct>
                <TopTitle>
                    <h1><img src={dog_home}></img> 漫画汪 免费看漫画</h1>
                    <span>所有內容均來源互聯網</span>
                </TopTitle>
                <BodyComponent loadMoreData={loadMoreData} loadMorePage={seriesPage}>
                    {isLoading ? loadingAnimation() : loadedContent()}
                </BodyComponent>
                <NavComponent/>
            </MainStruct>
        </ErrorBoundary>
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
