import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { HallStruct } from '../../style';
import { SetCurrentPosition } from '../store/actions';
import NavComponent from '../navigation';
import BodyComponent from '../body';

const Menu = (props) => {
    const { setCurrentPosition } = props;

    useEffect(() => {
        setCurrentPosition('menu');
    }, []);

    return (
        <HallStruct>
            <BodyComponent>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton variant="rect" height={135}/>
                <Skeleton variant="rect" height={135}/>
                <Skeleton variant="rect" height={135}/>
            </BodyComponent>
            <NavComponent />
        </HallStruct>
    );
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
