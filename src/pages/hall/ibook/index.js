import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {HallStruct} from "../../style";
import {SetCurrentPosition} from "../store/actions";
import {GetReadHistoryList} from "./store/actions";


const IBook = (props) => {
    const {readHistoryList,getReadHistory, setCurrentPosition } = props;

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
        getReadHistory:async ()=>{
            await dispatch(GetReadHistoryList());
        },
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

const mapStateToProps = (state) => {
    return {
        readHistoryList: state.iBook.get('readHistoryList'),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IBook);