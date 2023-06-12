import React from 'react';
import { BottomFloor, Bottom, NavigationTab, NavHome, NavMenu, NavSearch, NavIBook, NavMe, NavHomeSelected, NavMenuSelected, NavSearchSelected, NavIBookSelected, NavMeSelected } from './style';
import { connect } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const NavLinkWithIcon = React.memo(({ to, iconSelected, icon }) => {
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
        case "/ibook":
            selectedIcon = <NavIBookSelected/>;
            break;
        case "/me":
            selectedIcon = <NavMeSelected/>;
            break;
    }

    return (
        <NavLink to={to} exact replace={isActive}>
            <NavigationTab activeClassName={isActive ? "active" : ""}>
                {isActive ? (selectedIcon || iconSelected) : icon}
            </NavigationTab>
        </NavLink>
    );
});

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BottomFloor>
                <Bottom>
                    <NavLinkWithIcon to="/" exact iconSelected={<NavHomeSelected/>} icon={<NavHome/>}/>
                    <NavLinkWithIcon to="/menu" exact iconSelected={<NavMenuSelected/>} icon={<NavMenu/>}/>
                    <NavLinkWithIcon to="/search" exact iconSelected={<NavSearchSelected/>} icon={<NavSearch/>}/>
                    <NavLinkWithIcon to="/ibook" exact iconSelected={<NavIBookSelected/>} icon={<NavIBook/>}/>
                    <NavLinkWithIcon to="/me" exact iconSelected={<NavMeSelected/>} icon={<NavMe/>}/>
                </Bottom>
            </BottomFloor>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(NavComponent);
