import React from 'react';
import {
    BottomFloor,
    Bottom,
    NavigationTab, NavHome, NavMenu, NavSearch, NavRank, NavMe
} from './style';
import {connect} from "react-redux";
import anime from "animejs";

class TopComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BottomFloor>
                <Bottom>
                    <NavigationTab><NavHome></NavHome></NavigationTab>
                    <NavigationTab><NavMenu></NavMenu></NavigationTab>
                    <NavigationTab><NavSearch></NavSearch></NavigationTab>
                    <NavigationTab><NavRank></NavRank></NavigationTab>
                    <NavigationTab><NavMe></NavMe></NavigationTab>
                </Bottom>
            </BottomFloor>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, null)(TopComponent)