import React from 'react';
import {
    BottomFloor,
} from './style';
import {connect} from "react-redux";
import anime from "animejs";

class TopComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <BottomFloor></BottomFloor>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, null)(TopComponent)