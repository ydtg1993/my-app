import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {withRouter} from "react-router-dom";
import {BodyWrapper} from "../body/style";


class IBook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BodyWrapper>
                <BodyComponent/>
                <NavComponent/>
            </BodyWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IBook))