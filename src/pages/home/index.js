import React from 'react';
import {
    HomeWrapper
} from './style';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import TopComponent from './top';
import BottomComponent from './bottom'
import BodyComponent from "./body";


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <HomeWrapper>
                    <TopComponent />
                    <BodyComponent/>
                    <BottomComponent />
                </HomeWrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)