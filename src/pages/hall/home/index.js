import React from 'react';
import {connect} from 'react-redux';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {withRouter} from "react-router-dom";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props.setCurrentPosition('home');
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

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //getHomePageSeries: () => dispatch(actions.GetHomePage()),
        setCurrentPosition(position){
            dispatch(SetCurrentPosition(position))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
