import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";

import Skeleton from "react-loading-skeleton";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.props.setCurrentPosition('menu');
    }

    render() {
        return (
            <BodyWrapper>
                <BodyComponent>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </BodyComponent>
                <NavComponent/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)