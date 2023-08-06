import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import {HallStruct} from '../../style';
import {SetCurrentPosition} from '../store/actions';
import BottomComponent from '../navigation';
import BodyComponent from '../body';
import {SearchButton, SearchIcon, SearchInput, TopPanel, ComicInfoBox, CoverPart, InfoPart, EmptyBox} from './style';
import {GetSearch} from "./store/actions";
import debounce from 'lodash/debounce';
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-loading-skeleton/dist/skeleton.css'
import gif_finn from "../../../resource/pics/finn.gif";
import {useHistory} from "react-router-dom";
import {WebHost} from "../../../index";
import {Helmet} from "react-helmet";

const Search = (props) => {
    const {searchResult, searchPage, searchWords, setCurrentPosition, getSearchResult} = props;
    const [isLoading, setIsLoading] = useState(true);
    const debouncedGetSearchResult = debounce(getSearchResult, 1000);
    const searchInputRef = useRef(null);

    useEffect(() => {
        setCurrentPosition('search');
    }, []);

    useEffect(() => {
        if (searchPage === 0) {
            (async () => {
                await getSearchResult(searchWords, searchPage);
                setTimeout(() => setIsLoading(false), 300);
            })();
        } else {
            setIsLoading(false);
        }
    }, [getSearchResult, searchPage, searchWords]);

    const loadMoreData = async () => {
        if (searchPage > -1) {
            await getSearchResult(searchWords, searchPage, true);
        }
    };

    const history = useHistory();
    const handleComicClick = (comicId) => {
        history.push(`/comic/${comicId}`);
    };

    const handleSearchButtonClick = () => {
        const keyword = searchInputRef.current.value;
        if (keyword.trim() === searchWords) return;
        if (keyword.trim() === "") return;
        setIsLoading(true);
        (async function() {
            await new Promise((resolve) => {
                debouncedGetSearchResult(keyword, 0);
                resolve();
            });
            setTimeout(() => setIsLoading(false), 1200);
        })();
    };

    const loadingAnimation = () => {
        return (
            <>
                <Skeleton variant="rect" height={135}/>
                <Skeleton variant="rect" height={135}/>
                <Skeleton variant="rect" height={135}/>
            </>
        );
    };

    const loadedContent = () => {
        if (searchPage === -1 && searchResult.isEmpty()) {
            return (<EmptyBox/>)
        }
        return (
            <>
                {searchResult.map((comic) => (
                    <React.Fragment key={comic.id}>
                        <ComicInfoBox onClick={() => handleComicClick(comic.id)}>
                            <CoverPart>
                                <LazyLoadImage src={comic.cover} alt={comic.title} effect="blur"
                                               placeholderSrc={gif_finn}/>
                            </CoverPart>
                            <InfoPart>
                                <li className={"title"}>{comic.title}</li>
                                <li><label>作 者</label><span style={{color:'black'}}>{comic.author}</span></li>
                                <li><label>热 度</label><span style={{color:'rgb(68 63 117)'}}>{comic.popularity}</span></li>
                                <li><label>标 签</label>{Object.entries(comic.label).map(([id, value]) => (
                                    <span className={"tag"} key={"tag-" + id}>{value}</span>
                                ))}</li>
                            </InfoPart>
                        </ComicInfoBox>
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <>
            <Helmet>
                <title>搜索页 - 动漫汪</title>
                <meta name="description" content="搜索在线漫画,日漫,韩漫,国漫,漫画图片,漫画头像,二次元,同人漫画,漫画推荐,漫画排行榜,条漫大赛,漫画小说"/>
                <link rel="canonical" href={WebHost + "search"}/>
            </Helmet>
            <HallStruct style={{gridTemplateRows: '40px auto 60px'}}>
                <TopPanel>
                    <SearchInput placeholder="请输入搜索关键字" ref={searchInputRef}/>
                    <SearchButton onClick={handleSearchButtonClick}>
                        <SearchIcon/>
                    </SearchButton>
                </TopPanel>
                <BodyComponent loadMoreData={loadMoreData} loadMorePage={searchPage}>
                    {isLoading ? loadingAnimation() : loadedContent()}
                </BodyComponent>
                <BottomComponent/>
            </HallStruct>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        searchResult: state.search.get('searchResult'),
        searchPage: state.search.get('searchPage'),
        searchWords: state.search.get('searchWords'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResult: async (keyword, page, loadMore = false) => {
            await dispatch(GetSearch(keyword, page, loadMore));
        },
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
