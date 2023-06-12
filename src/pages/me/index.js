import React from 'react';
import {
    HomeWrapper
} from './style';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../common/navigation'
import BodyComponent from "../common/body";
import {withRouter} from "react-router-dom";


class Me extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeWrapper>
                <BodyComponent/>
                <NavComponent/>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Me))