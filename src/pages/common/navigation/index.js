import React from 'react';
import {
    BottomFloor,
    Bottom,
    NavigationTab, NavHome, NavMenu, NavSearch, NavRank, NavMe
} from './style';
import {connect} from "react-redux";
import {BrowserRouter as Router,Link} from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return false;
    }

    render() {
        return (
            <Router>
            <BottomFloor>
                <Bottom>
                    <Link to="/"><NavigationTab><NavHome></NavHome></NavigationTab></Link>
                    <Link to="/menu"><NavigationTab><NavMenu></NavMenu></NavigationTab></Link>
                    <Link to="/search"><NavigationTab><NavSearch></NavSearch></NavigationTab></Link>
                    <Link to="/rank"><NavigationTab><NavRank></NavRank></NavigationTab></Link>
                    <Link to="/me"><NavigationTab><NavMe></NavMe></NavigationTab></Link>
                </Bottom>
            </BottomFloor>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, null)(NavComponent)