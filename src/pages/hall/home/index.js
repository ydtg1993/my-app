import React, { useState,useEffect } from 'react';
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
    const { series, setCurrentPosition, getHomeSeries } = props;
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            await getHomeSeries(page);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setCurrentPosition('home');
        setIsLoading(true);
        fetchData();
    }, [setCurrentPosition, getHomeSeries, page]);

    const loadingAnimation = () => {
        return (
            <>
                <Skeleton width={150} />
                <Skeleton variant="rect" height={240} />
                <Skeleton width={150} />
                <Skeleton variant="rect" height={240} />
                <Skeleton width={150} />
                <Skeleton variant="rect" height={240} />
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
                            {data.comics.map((comic)=>(
                                <ComicBox key={comic.id}>
                                    <div className={'imgBox'}>
                                        <LazyLoadImage src={comic.cover} alt="Image" effect="blur" placeholderSrc={gif_finn}/>
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
            <BodyComponent>
                {isLoading ? loadingAnimation() : content()}
            </BodyComponent>
            <NavComponent />
        </BodyWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        series: state.home.get('series'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeSeries: (p) => dispatch(GetSeries(p)),
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
