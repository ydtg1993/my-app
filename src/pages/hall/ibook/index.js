import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {withRouter} from "react-router-dom";
import {BodyWrapper} from "../body/style";
import {SetCurrentPosition} from "../store/actions";


class IBook extends React.Component {
    constructor(props) {
        super(props);
        this.props.setCurrentPosition('ibook');
    }

    render() {
        return (
            <BodyWrapper>
                <BodyComponent/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IBook))