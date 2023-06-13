import React from 'react';
import {
    BottomFloor,
    Bottom,
    NavigationTab,
} from './style';
import {connect} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BottomFloor>
                <Bottom>
                    <NavLink to="/" exact><NavigationTab className={"home"} /></NavLink>
                    <NavLink to="/menu" exact><NavigationTab className={"menu"} /></NavLink>
                    <NavLink to="/search" exact><NavigationTab className={"search"} /></NavLink>
                    <NavLink to="/ibook" exact><NavigationTab className={"ibook"} /></NavLink>
                    <NavLink to="/me" exact><NavigationTab className={"me"} /></NavLink>
                </Bottom>
            </BottomFloor>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(NavComponent);
