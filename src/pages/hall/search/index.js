import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import BottomComponent from '../navigation'
import BodyComponent from "../body";
import {withRouter} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {BodyWrapper} from "../body/style";


class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BodyWrapper>
                <BodyComponent>
                    <Skeleton variant="rect" height={90}/>
                    <Skeleton variant="rect" height={90}/>
                    <Skeleton variant="rect" height={90}/>
                </BodyComponent>
                <BottomComponent/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search))