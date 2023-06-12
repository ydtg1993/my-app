import React from 'react';
import {HomeWrapper} from './style';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../common/navigation'
import BodyComponent from "../common/body";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        !this.props.homePageSeries && this.props.getHomePageSeries();
    }

    render() {
        return (
            <HomeWrapper>
                <BodyComponent>
                    <Skeleton width={150}/>
                    <Skeleton variant="rect" height={240} />
                    <Skeleton width={150}/>
                    <Skeleton variant="rect" height={240} />
                </BodyComponent>
                <NavComponent/>
            </HomeWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
