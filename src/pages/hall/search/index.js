import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import BottomComponent from '../navigation'
import BodyComponent from "../body";
import Skeleton from "react-loading-skeleton";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";
import {SearchButton, SearchInput, TopPanel} from "./style";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props.setCurrentPosition('search');
    }

    render() {
        return (
            <BodyWrapper style={{gridTemplateRows:"40px auto 60px"}}>
                <TopPanel><SearchInput/><SearchButton/></TopPanel>
                <BodyComponent></BodyComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)