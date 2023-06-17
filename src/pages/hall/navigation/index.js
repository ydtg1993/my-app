import React from 'react';
import {
    BottomFloor,
    Bottom,
    NavigationTab,
} from './style';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.currentPosition)
    }

    render() {
        return (
            <BottomFloor>
                <Bottom>
                    <NavLink to="/" exact><NavigationTab className={"home"} /></NavLink>
                    <NavLink to="/menu" exact><NavigationTab className={this.props.currentPosition === 'menu' ? 'menu-in' : 'menu'} /></NavLink>
                    <NavLink to="/search" exact><NavigationTab className={"search"} /></NavLink>
                    <NavLink to="/ibook" exact><NavigationTab className={this.props.currentPosition === 'ibook' ? 'ibook-in' : 'ibook'} /></NavLink>
                    <NavLink to="/me" exact><NavigationTab className={this.props.currentPosition === 'me' ? 'me-in' : 'me'} /></NavLink>
                </Bottom>
            </BottomFloor>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPosition:state.hall.get('currentPosition')
    };
};

export default connect(mapStateToProps, null)(NavComponent);
