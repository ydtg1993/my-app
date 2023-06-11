import React from 'react';
import {
    BottomFloor,
    Bottom,
    NavigationTab,
    NavHome,
    NavMenu,
    NavSearch,
    NavRank,
    NavMe,
    NavHomeSelected, NavMenuSelected, NavSearchSelected, NavRankSelected, NavMeSelected
} from './style';
import {connect} from "react-redux";
import {BrowserRouter as Router, Link, useLocation} from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <BottomFloor>
                    <Bottom>
                        <NavLinkWithIcon to="/" exact iconSelected={<NavHomeSelected/>} icon={<NavHome/>}/>
                        <NavLinkWithIcon to="/menu" exact iconSelected={<NavMenuSelected/>} icon={<NavMenu/>}/>
                        <NavLinkWithIcon to="/search" exact iconSelected={<NavSearchSelected/>} icon={<NavSearch/>}/>
                        <NavLinkWithIcon to="/rank" exact iconSelected={<NavRankSelected/>} icon={<NavRank/>}/>
                        <NavLinkWithIcon to="/me" exact iconSelected={<NavMeSelected/>} icon={<NavMe/>}/>
                    </Bottom>
                </BottomFloor>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, null)(NavComponent);

const NavLinkWithIcon = ({to, iconSelected, icon}) => {
    const location = useLocation();
    const isActive = (location.pathname === to);

    let selectedIcon = null;

    switch (to) {
        case "/":
            selectedIcon = <NavHomeSelected/>;
            break;
        case "/menu":
            selectedIcon = <NavMenuSelected/>;
            break;
        case "/search":
            selectedIcon = <NavSearchSelected/>;
            break;
        case "/rank":
            selectedIcon = <NavRankSelected/>;
            break;
        case "/me":
            selectedIcon = <NavMeSelected/>;
            break;
    }

    return (
        <Link to={to} replace={isActive}>
            <NavigationTab>
                {isActive ? (selectedIcon || iconSelected) : icon}
            </NavigationTab>
        </Link>
    );
};
