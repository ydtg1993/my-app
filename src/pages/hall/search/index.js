import React, {useEffect, useState, useRef} from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { HallStruct } from '../../style';
import { SetCurrentPosition } from '../store/actions';
import BottomComponent from '../navigation';
import BodyComponent from '../body';
import {SearchButton, SearchIcon, SearchInput, TopPanel,ComicInfoBox, CoverPart, InfoPart} from './style';
import {ClearSearchList, GetSearch} from "./store/actions";
import debounce from 'lodash/debounce';
import {LazyLoadImage} from "react-lazy-load-image-component";
import gif_finn from "../../../resource/pics/finn.gif";

const Search = (props) => {
    const {searchResult, searchPage,searchWords, setCurrentPosition,getSearchResult,clearSearch } = props;
    const [isLoading, setIsLoading] = useState(true);
    const debouncedGetSearchResult = debounce(getSearchResult, 1000);
    const searchInputRef = useRef(null);

    useEffect(() => {
        setCurrentPosition('search');
        if (searchPage === 0) {
            (async () => {
                await getSearchResult(searchPage);
                setTimeout(() => setIsLoading(false), 300);
            })();
        } else {
            setIsLoading(false);
        }
    }, []);

    const handleSearchButtonClick = async () => {
        const keyword = searchInputRef.current.value;
        if(keyword.trim() === searchWords)return ;
        if(keyword.trim() === "")return ;
        clearSearch();
        setIsLoading(true);
        await debouncedGetSearchResult(keyword, 0);
        setTimeout(()=>setIsLoading(false),700);
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
        return (
            <>
                {searchResult.map((comic) => (
                    <React.Fragment key={comic.id}>
                        <ComicInfoBox>
                            <CoverPart>
                                <LazyLoadImage src={comic.cover} alt="Image" effect="blur"
                                               placeholderSrc={gif_finn}/>
                            </CoverPart>
                            <InfoPart>
                                <li className={"title"}>{comic.title}</li>
                                <li><label>热 度</label>{comic.popularity}</li>
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
        <HallStruct style={{ gridTemplateRows: '40px auto 60px' }}>
            <TopPanel>
                <SearchInput placeholder="请输入搜索关键字" ref={searchInputRef}/>
                <SearchButton onClick={handleSearchButtonClick}>
                    <SearchIcon/>
                </SearchButton>
            </TopPanel>
            <BodyComponent>
                {isLoading ? loadingAnimation() : loadedContent()}
            </BodyComponent>
            <BottomComponent />
        </HallStruct>
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
        getSearchResult: async (keyword,page) => {
            await dispatch(GetSearch(keyword,page));
        },
        clearSearch:() => dispatch(ClearSearchList()),
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
