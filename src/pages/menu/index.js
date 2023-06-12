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
import Skeleton from "react-loading-skeleton";


class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeWrapper>
                <BodyComponent>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </BodyComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu))