import React from 'react';
import {
    TopFloor,
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
                <TopFloor>
                </TopFloor>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, null)(TopComponent)