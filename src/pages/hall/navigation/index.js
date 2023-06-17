import React from 'react';
import {
    BottomFloor,
    Bottom,
    NavigationTab,
} from './style';
import {connect} from "react-redux";
import {NavLink,withRouter} from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navStyle = {display:'flex',alignItems:'center',height:'58px'};

        return (
            <BottomFloor>
                <Bottom>
                    <NavLink to="/" exact style={navStyle}><NavigationTab className={this.props.currentPosition === 'home' ? 'home-in' : 'home'} /></NavLink>
                    <NavLink to="/menu" exact style={navStyle}><NavigationTab className={this.props.currentPosition === 'menu' ? 'menu-in' : 'menu'} /></NavLink>
                    <NavLink to="/search" exact style={navStyle}><NavigationTab className={this.props.currentPosition === 'search' ? 'search-in' : 'search'} /></NavLink>
                    <NavLink to="/ibook" exact style={navStyle}><NavigationTab className={this.props.currentPosition === 'ibook' ? 'ibook-in' : 'ibook'} /></NavLink>
                    <NavLink to="/me" exact style={navStyle}><NavigationTab className={this.props.currentPosition === 'me' ? 'me-in' : 'me'} /></NavLink>
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

export default connect(mapStateToProps, null)(withRouter(NavComponent));
