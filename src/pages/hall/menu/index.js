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
import {ComicBox} from "../home/style";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Menu = (props) => {
    const {genreList, genrePage, setCurrentPosition, getMenuList,changeMenuList} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [tagTab, setTagTab] = useState(0);
    const [tagMenu] = useState(List(
        [{"id": 0, "title": "\u5168\u90e8"}, {"id": 107, "title": "\u70ed\u8840"}, {
            "id": 118,
            "title": "\u7a7f\u8d8a"
        }, {"id": 160, "title": "\u4fee\u4ed9"}, {"id": 127, "title": "\u604b\u7231"}, {
            "id": 132,
            "title": "\u5192\u9669"
        }, {"id": 106, "title": "\u641e\u7b11"}, {"id": 111, "title": "\u5973\u795e"}, {
            "id": 115,
            "title": "\u53e4\u98ce"
        }, {"id": 125, "title": "\u5947\u5e7b"}, {"id": 100, "title": "\u63a8\u7406"}, {
            "id": 101,
            "title": "\u60ca\u609a"
        }, {"id": 102, "title": "\u840c\u7cfb"}, {"id": 103, "title": "\u6cbb\u6108"}, {
            "id": 104,
            "title": "\u5a31\u4e50\u5708"
        }, {"id": 105, "title": "\u9752\u6625"}, {"id": 108, "title": "\u8111\u6d1e"}, {
            "id": 109,
            "title": "\u7cfb\u7edf"
        }, {"id": 110, "title": "\u6821\u56ed"}, {"id": 112, "title": "\u65e5\u5e38"}, {
            "id": 113,
            "title": "\u804c\u573a"
        }, {"id": 114, "title": "\u5996\u602a"}, {"id": 116, "title": "\u6d6a\u6f2b"}, {
            "id": 117,
            "title": "\u9006\u88ad"
        }, {"id": 119, "title": "\u603b\u88c1"}, {"id": 120, "title": "\u6218\u6597"}, {
            "id": 121,
            "title": "\u52b1\u5fd7"
        }, {"id": 122, "title": "\u590d\u4ec7"}, {"id": 123, "title": "\u5927\u5973\u4e3b"}, {
            "id": 124,
            "title": "\u7f8e\u98df"
        }, {"id": 126, "title": "\u5267\u60c5"}, {"id": 128, "title": "\u52a8\u4f5c"}, {
            "id": 129,
            "title": "\u795e\u4ed9"
        }, {"id": 130, "title": "\u7384\u5e7b"}, {"id": 131, "title": "\u91cd\u751f"}, {
            "id": 133,
            "title": "\u6b63\u80fd\u91cf"
        }, {"id": 134, "title": "\u5b85\u5411"}, {"id": 135, "title": "\u6b66\u4fa0"}, {
            "id": 136,
            "title": "\u90fd\u5e02"
        }, {"id": 137, "title": "\u602a\u7269"}, {"id": 138, "title": "\u730e\u5947"}, {
            "id": 139,
            "title": "\u9ad8\u751c"
        }, {"id": 140, "title": "\u6027\u8f6c"}, {"id": 141, "title": "\u8650\u5fc3"}, {
            "id": 142,
            "title": "\u672b\u65e5"
        }, {"id": 143, "title": "\u6697\u9ed1"}, {"id": 144, "title": "\u4f53\u80b2"}, {
            "id": 145,
            "title": "\u7075\u5f02"
        }, {"id": 146, "title": "\u70e7\u8111"}, {"id": 147, "title": "\u60ac\u7591"}, {
            "id": 148,
            "title": "\u6b4c\u821e"
        }, {"id": 149, "title": "\u5bab\u6597"}, {"id": 150, "title": "\u79d1\u5e7b"}, {
            "id": 151,
            "title": "\u5bb6\u5ead"
        }, {"id": 152, "title": "\u6076\u641e"}, {"id": 153, "title": "\u4eb2\u60c5"}, {
            "id": 154,
            "title": "\u6743\u8c0b"
        }, {"id": 155, "title": "\u5b85\u6597"}, {"id": 156, "title": "\u5f02\u80fd"}, {
            "id": 157,
            "title": "\u8c6a\u5feb"
        }, {"id": 158, "title": "\u67b6\u7a7a\u4e16\u754c"}, {"id": 159, "title": "\u5f02\u5f62"}, {
            "id": 161,
            "title": "\u673a\u7532"
        }, {"id": 162, "title": "\u552f\u7f8e"}, {"id": 163, "title": "\u9b54\u5e7b"}, {
            "id": 164,
            "title": "\u7535\u7ade"
        }, {"id": 165, "title": "\u5f02\u4e16\u754c"}, {"id": 166, "title": "\u7ade\u6280"}, {
            "id": 167,
            "title": "\u795e\u8c6a"
        }, {"id": 168, "title": "\u5bab\u5ef7\u4e1c\u65b9"}, {"id": 169, "title": "\u4e27\u5c38"}, {
            "id": 170,
            "title": "\u5bab\u5ef7\u897f\u65b9"
        }, {"id": 171, "title": "\u56fe\u8c31"}, {"id": 172, "title": "\u8be1\u5f02"}, {
            "id": 173,
            "title": "\u91d1\u624b\u6307"
        }, {"id": 174, "title": "\u5ba0\u517d"}, {"id": 175, "title": "\u5feb\u7a7f"}, {
            "id": 176,
            "title": "\u53cd\u5957\u8def"
        }, {"id": 177, "title": "\u6492\u7cd6"}, {"id": 178, "title": "\u65e0\u8282\u64cd"}, {
            "id": 179,
            "title": "\u6c2a\u91d1"
        }, {"id": 180, "title": "\u8fea\u5316"}, {"id": 181, "title": "\u840c\u5a03"}, {
            "id": 182,
            "title": "\u5386\u53f2"
        }, {"id": 183, "title": "\u5076\u50cf"}, {"id": 184, "title": "\u540d\u8457"}, {
            "id": 185,
            "title": "\u6295\u7a3f"
        }, {"id": 186, "title": "\u5e7b\u60f3"}, {"id": 187, "title": "\u539f\u521b"}, {
            "id": 188,
            "title": "\u767e\u5408"
        }, {"id": 189, "title": "\u7eaf\u7231"}, {"id": 190, "title": "\u5176\u4ed6"}, {
            "id": 191,
            "title": "\u6e38\u620f"
        }, {"id": 192, "title": "\u5c11\u5973"}, {"id": 193, "title": "\u5c11\u5e74"}, {
            "id": 194,
            "title": "\u975e\u4eba\u7c7b"
        }, {"id": 195, "title": "\u672b\u4e16"}, {"id": 196, "title": "\u5f3a\u5267\u60c5"}, {
            "id": 197,
            "title": "\u5b8c\u7ed3"
        }]
    ));

    const CustomTabs = styled(Tabs)(({theme}) => ({
        backgroundColor: "#fff6e7",
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
