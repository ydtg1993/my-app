import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {withRouter} from "react-router-dom";
import {BodyWrapper} from "../body/style";

class Home extends React.Component {
    constructor(props) {
        super(props);
        !this.props.homePageSeries && this.props.getHomePageSeries();
    }

    render() {
        return (
            <BodyWrapper>
                <BodyComponent>
                    <Skeleton width={150}/>
                    <Skeleton variant="rect" height={240}/>
                    <Skeleton width={150}/>
                    <Skeleton variant="rect" height={240}/>
                    <Skeleton width={150}/>
                    <Skeleton variant="rect" height={240}/>
                </BodyComponent>
                <NavComponent/>
            </BodyWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomePageSeries: () => dispatch(actions.GetHomePage()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
