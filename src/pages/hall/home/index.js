import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {SetCurrentPosition} from "../store/actions";
import {ComicBox, HallStruct, RangeList} from "../../style"
import {BottomSection, SeriesLabel, TopTitle} from "./style";
/*other component*/
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {GetHomeSeries} from "./store/actions";
import {Link} from 'react-router-dom';
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../Err/errorBoundary";
import {dog_home, img_blank} from "../../../resource";
import ImageLazy from "../../component/ImageLazy";
import {WebHost} from "../../../index";
import {Helmet} from "react-helmet";

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
                        <RangeList>
                            {data.comics.map((comic) => {
                                return (
                                    <div>
                                    <ComicBox key={data.id + "-" + comic.id}>
                                        <Link to={`/comic/${comic.id}`}>
                                            <div className={'imgBox'}>
                                                <ImageLazy src={img_blank} data-src={comic.cover} alt={comic.title} options={{ threshold: 0.1 }}/>
                                            </div>
                                            <div className={'titleBox'}>
                                                <h3>{comic.title}</h3>
                                            </div>
                                        </Link>
                                    </ComicBox>
                                    </div>)
                            })}
                        </RangeList>
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Helmet>
                <title>主页 - 漫画汪</title>
                <meta name="description" content="搜索在线漫画,日漫,韩漫,国漫,漫画图片,漫画头像,二次元,同人漫画,漫画推荐,漫画排行榜,条漫大赛,漫画小说"/>
                <link rel="canonical" href={WebHost}/>
            </Helmet>
            <HallStruct>
                <BodyComponent loadMoreData={loadMoreData} loadMorePage={seriesPage}>
                    <TopTitle>
                        <h1>漫画汪 <img src={dog_home}></img> 看漫画</h1>
                    </TopTitle>
                    {isLoading ? loadingAnimation() : loadedContent()}
                    <BottomSection>
                        <span>所有內容均來源互聯網</span>
                    </BottomSection>
                </BodyComponent>
                <NavComponent/>
            </HallStruct>
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
