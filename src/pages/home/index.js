import React from 'react';
import {
    HomeWrapper
} from './style';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import BottomComponent from '../common/bottom'
import BodyComponent from "../common/body";


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeWrapper>
                <BodyComponent/>
                <BottomComponent/>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)