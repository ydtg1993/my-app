import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import BottomComponent from '../navigation'
import BodyComponent from "../body";
import {withRouter} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props.setCurrentPosition('search');
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
    return {
        setCurrentPosition(position){
            dispatch(SetCurrentPosition(position))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search))