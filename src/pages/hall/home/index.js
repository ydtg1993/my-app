import React from 'react';
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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props.setCurrentPosition('home');
        this.state = {
            page: 1,
            isLoading: false
        };
        this.props.getHomeSeries(this.state.page)
    }

    loadingAnimation() {
        return (
            <>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240}/>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240}/>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240}/>
            </>
        )
    }

    content() {
        return (
            <>
                <SeriesLabel><b>首页推荐</b></SeriesLabel>
                <SeriesList>
                    <ComicBox>
                        <div className={"imgBox"}>
                            <LazyLoadImage
                                src="https://resource.c36f6d7.com/resources/comic/2/98/i36HFEXQe.jpg"
                                alt="Image"
                                effect="blur"
                                placeholderSrc={gif_finn}
                            />
                        </div>
                        <div className={"titleBox"}><span>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span></div>
                    </ComicBox>
                    <ComicBox>
                        <div className={"imgBox"}>
                            <LazyLoadImage
                                src="https://resource.c36f6d7.com/resources/comic/2/98/i36HFEXQe.jpg"
                                alt="Image"
                                effect="blur"
                                placeholderSrc={gif_finn}
                            />
                        </div>
                        <div className={"titleBox"}><span>哈哈</span></div>
                    </ComicBox>
                    <ComicBox>
                        <div className={"imgBox"}>
                            <LazyLoadImage
                                src="https://resource.c36f6d7.com/resources/comic/2/98/i36HFEXQe.jpg"
                                alt="Image"
                                effect="blur"
                                placeholderSrc={gif_finn}
                            />
                        </div>
                        <div className={"titleBox"}><span>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span></div>
                    </ComicBox>
                    <ComicBox>
                        <div className={"imgBox"}>
                            <LazyLoadImage
                                src="https://resource.c36f6d7.com/resources/comic/2/71/QBANYQ2Yi.jpg"
                                alt="Image"
                                effect="blur"
                                placeholderSrc={gif_finn}
                            />
                        </div>
                        <div className={"titleBox"}><span>哈哈哈</span></div>
                    </ComicBox>
                    <ComicBox></ComicBox>
                    <ComicBox></ComicBox>
                </SeriesList>
            </>
        )
    }

    render() {
        const {series} = this.props;
        return (
            <BodyWrapper>
                <BodyComponent>
                    {series && series.map(function (data) {

                    })}
                </BodyComponent>
                <NavComponent/>
            </BodyWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        series:state.home.get('series')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeSeries: (p) => {
            dispatch(GetSeries(p));
        },
        setCurrentPosition:(position) => dispatch(SetCurrentPosition(position))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
