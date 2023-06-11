import React from 'react';
import {
    BottomFloor,
    Bottom,
    Nav1, Nav2, Nav3, Nav4, Nav5
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
                    <Nav1></Nav1>
                    <Nav2></Nav2>
                    <Nav3></Nav3>
                    <Nav4></Nav4>
                    <Nav5></Nav5>
                </Bottom>
            </BottomFloor>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, null)(TopComponent)