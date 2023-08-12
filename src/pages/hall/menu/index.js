import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {MenuList, MenuStruct} from './style';
import {SetCurrentPosition} from '../store/actions';
import NavComponent from '../navigation';
import BodyComponent from '../body';
import {List} from 'immutable';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {styled} from "@mui/material/styles";
import {Helmet} from "react-helmet";
import {WebHost} from "../../../index";
import {ChangeMenuList, GetMenuList} from "./store/actions";
import {ComicBox} from "../../style";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Menu = (props) => {
    const {genreList, genrePage, setCurrentPosition, getMenuList,changeMenuList} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [tagTab, setTagTab] = useState(0);
    const [tagMenu] = useState(List(
        [{"id":0,"title":"\u5168\u90e8"},{"id":1,"title":"\u65e5\u5e38"},{"id":2,"title":"\u604b\u7231"},{"id":3,"title":"\u5267\u60c5"},{"id":4,"title":"\u5947\u5e7b"},{"id":5,"title":"\u7384\u5e7b"},{"id":6,"title":"\u5927\u5973\u4e3b"},{"id":7,"title":"\u79d1\u5e7b"},{"id":8,"title":"\u5192\u9669"},{"id":9,"title":"\u7cfb\u7edf"},{"id":10,"title":"\u53e4\u98ce"},{"id":11,"title":"\u70ed\u8840"},{"id":12,"title":"\u91cd\u751f"},{"id":13,"title":"\u72af\u7f6a"},{"id":14,"title":"\u6218\u4e89"},{"id":15,"title":"\u5386\u53f2"},{"id":16,"title":"\u641e\u7b11"},{"id":17,"title":"\u60ac\u7591"},{"id":18,"title":"\u9752\u6625"},{"id":19,"title":"\u603b\u88c1"},{"id":20,"title":"\u5f02\u80fd"},{"id":21,"title":"\u7ade\u6280"},{"id":22,"title":"\u90fd\u5e02"},{"id":23,"title":"\u6050\u6016"},{"id":24,"title":"\u840c\u7cfb"},{"id":25,"title":"\u672b\u4e16"},{"id":26,"title":"\u6b66\u4fa0"},{"id":27,"title":"\u52a8\u4f5c"},{"id":28,"title":"\u5f3a\u5267\u60c5"},{"id":29,"title":"\u975e\u4eba\u7c7b"},{"id":30,"title":"\u6b63\u80fd\u91cf"},{"id":31,"title":"\u590d\u4ec7"},{"id":32,"title":"\u6cbb\u6108"},{"id":33,"title":"\u9b54\u5e7b"},{"id":34,"title":"\u7a7f\u8d8a"},{"id":35,"title":"\u5c11\u5e74"},{"id":36,"title":"\u9006\u88ad"},{"id":37,"title":"\u5f02\u5f62"},{"id":38,"title":"\u5176\u4ed6"},{"id":39,"title":"\u5b8c\u7ed3"},{"id":40,"title":"\u7075\u5f02"},{"id":41,"title":"\u6295\u7a3f"}]
    ));

    const CustomTabs = styled(Tabs)(({theme}) => ({
        backgroundColor: "rgb(255 255 255 / 90%)",
        borderRadius: theme.shape.borderRadius,
        padding: '4px',
    }));

    const CustomTab = styled(Tab)(({theme}) => ({
        color: "purple",
        "&.Mui-selected": {
            color: "#3a9ede",
            fontWeight: "bold",
        },
        padding: "12px",
        minWidth: "auto",
    }));

    useEffect(() => {
        setCurrentPosition('menu');
    }, []);

    useEffect(() => {
        if (genrePage === 0) {
            (async () => {
                await getMenuList(genrePage, 0);
                setTimeout(() => setIsLoading(false), 300);
            })();
        } else {
            setIsLoading(false);
        }
    }, [genrePage, setCurrentPosition, getMenuList]);

    const loadMoreData = async () => {
        if (genrePage > -1) {
            await getMenuList(genrePage);
        }
    };

    const handleTagClick = (event, newValue) => {
        setTagTab(newValue);
        setIsLoading(true);
        changeMenuList(newValue);
        setTimeout(()=> setIsLoading(false),700);
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
                <MenuList>
                    {genreList.map((comic) => (
                        <ComicBox key={tagTab + "-" + comic.id}>
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
                </MenuList>
            </>
        );
    };

    return (
        <>
            <Helmet>
                <title>分类页 - 动漫汪</title>
                <meta name="description" content="搜索在线漫画,日漫,韩漫,国漫,漫画图片,漫画头像,二次元,同人漫画,漫画推荐,漫画排行榜,条漫大赛,漫画小说"/>
                <link rel="canonical" href={WebHost + "menu"}/>
            </Helmet>
            <MenuStruct>
                <CustomTabs
                    value={tagTab}
                    onChange={handleTagClick}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile>
                    {tagMenu.map((tag, index) => (
                        <CustomTab key={index} label={tag.title}/>
                    ))}
                </CustomTabs>
                <BodyComponent loadMoreData={loadMoreData} loadMorePage={genrePage}>
                    {isLoading ? loadingAnimation() : loadedContent()}
                </BodyComponent>
                <NavComponent/>
            </MenuStruct>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        genreList: state.menu.get('genreList'),
        genrePage: state.menu.get('genrePage'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMenuList: async (p, category) => {
            await dispatch(GetMenuList(p, category));
        },
        changeMenuList: async (category) => {
            await dispatch(ChangeMenuList(category));
        },
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
