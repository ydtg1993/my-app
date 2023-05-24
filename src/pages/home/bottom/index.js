import React from 'react';
import {
    BottomFloor,
    Bottom
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
                <BottomFloor>
                    <Bottom/>
                </BottomFloor>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, null)(TopComponent)