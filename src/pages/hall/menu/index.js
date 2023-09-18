import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {MenuList, MenuStruct, Tabs, Tab, Option, TabNav, Options, OptionX} from './style';
import {SetCurrentPosition} from '../store/actions';
import NavComponent from '../navigation';
import BodyComponent from '../body';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Helmet} from "react-helmet";
import {WebHost} from "../../../index";
import {ChangeMenuList, GetMenuList} from "./store/actions";
import {ComicBox} from "../../style";
import {Link,useParams} from "react-router-dom";
import ErrorFallback from "../../Err/errorBoundary";
import {ErrorBoundary} from "react-error-boundary";
import {img_blank} from "../../../resource";
import ImageLazy from "../../component/ImageLazy";
import {navCategory, navCountry, navSort, navStatus} from "./nav";

const Menu = (props) => {
    const {genreList, genrePage, setCurrentPosition, getMenuList, changeMenuList} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState(null);
    const [selectedNav, setSelectedNav] = useState([0,0,0,0]);
    const { path } = useParams();

    useEffect(() => {
        setCurrentPosition('menu');
        const pathArray = path.split('-').map(Number);
        setSelectedNav(pathArray);
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
    }, [genrePage, getMenuList]);

    const handleTabSelect = (tabLabel) => {
        setSelectedTab(tabLabel);
    };

    const loadMoreData = async () => {
        if (genrePage > -1) {
            await getMenuList(genrePage);
        }
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
                        <ComicBox key={comic.id}>
                            <Link to={`/comic/${comic.id}`}>
                                <div className={'imgBox'}>
                                    <ImageLazy src={img_blank} data-src={comic.cover} alt={comic.title} options={{ threshold: 0.1 }}/>
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Helmet>
                <title>分类页 - 动漫汪</title>
                <meta name="description" content="搜索在线漫画,日漫,韩漫,国漫,漫画图片,漫画头像,二次元,同人漫画,漫画推荐,漫画排行榜,条漫大赛,漫画小说"/>
                <link rel="canonical" href={WebHost + "menu"}/>
            </Helmet>
            <MenuStruct>
                <Tabs>
                    <TabWithOptions label="类型" selectedTab={selectedTab} onSelectTab={handleTabSelect}>
                        <TabNav>
                            <Options>
                                {navCategory.map((val)=>
                                    <Option key={val.id} className={selectedNav[0] === val.id ? 'active':''}>{val.title}</Option>
                                )}
                            </Options>
                            <OptionX onClick={handleTabSelect}> ▲ 关 闭 ▲ </OptionX>
                        </TabNav>
                    </TabWithOptions>
                    <TabWithOptions label="地区" selectedTab={selectedTab} onSelectTab={handleTabSelect}>
                        <TabNav>
                            <Options>
                                {navCountry.map((val)=>
                                    <Option key={val.id} className={selectedNav[1] === val.id ? 'active':''}>{val.title}</Option>
                                )}
                            </Options>
                            <OptionX onClick={handleTabSelect}> ▲ 关 闭 ▲ </OptionX>
                        </TabNav>
                    </TabWithOptions>
                    <TabWithOptions label="状态" selectedTab={selectedTab} onSelectTab={handleTabSelect}>
                        <TabNav>
                            <Options>
                                {navStatus.map((val)=>
                                    <Option key={val.id} className={selectedNav[2] === val.id ? 'active':''}>{val.title}</Option>
                                )}
                            </Options>
                            <OptionX onClick={handleTabSelect}> ▲ 关 闭 ▲ </OptionX>
                        </TabNav>
                    </TabWithOptions>
                    <TabWithOptions label="排序" selectedTab={selectedTab} onSelectTab={handleTabSelect}>
                        <TabNav>
                            <Options>
                                {navSort.map((val)=>
                                    <Option key={val.id} className={selectedNav[3] === val.id ? 'active':''}>{val.title}</Option>
                                )}
                            </Options>
                            <OptionX onClick={handleTabSelect}> ▲ 关 闭 ▲ </OptionX>
                        </TabNav>
                    </TabWithOptions>
                </Tabs>
                <BodyComponent loadMoreData={loadMoreData} loadMorePage={genrePage}>
                    {isLoading ? loadingAnimation() : loadedContent()}
                </BodyComponent>
                <NavComponent/>
            </MenuStruct>
        </ErrorBoundary>
    );
};

const TabWithOptions = ({ label, children, selectedTab, onSelectTab }) => {
    const handleTabClick = (event) => {
        event.stopPropagation();
        if (label === selectedTab) {
            onSelectTab(null);
        } else {
            onSelectTab(label);
        }
    };

    return (
        <Tab onClick={handleTabClick} selected={label === selectedTab}>{label}{label === selectedTab &&
        React.Children.map(children, (child) =>
            React.cloneElement(child, {
                onClick: (event) => event.stopPropagation(),
            })
        )}</Tab>
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
