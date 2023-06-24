import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";


const Me = (props) => {
    const { setCurrentPosition } = props;

    useEffect(() => {
        setCurrentPosition('me');
    }, [setCurrentPosition]);

    return (
        <BodyWrapper>
            <BodyComponent />
            <NavComponent />
        </BodyWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(null, mapDispatchToProps)(Me);