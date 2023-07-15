import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {HallStruct} from "../../style";
import {SetCurrentPosition} from "../store/actions";


const IBook = (props) => {
    const { setCurrentPosition } = props;

    useEffect(() => {
        setCurrentPosition('ibook');
    }, [setCurrentPosition]);

    return (
        <HallStruct>
            <BodyComponent />
            <NavComponent />
        </HallStruct>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(null, mapDispatchToProps)(IBook);