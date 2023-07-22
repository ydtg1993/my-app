import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { HallStruct } from '../../style';
import { SetCurrentPosition } from '../store/actions';
import BottomComponent from '../navigation';
import BodyComponent from '../body';
import {SearchButton, SearchIcon, SearchInput, TopPanel} from './style';

const Search = (props) => {
    const { setCurrentPosition } = props;

    useEffect(() => {
        setCurrentPosition('search');
    }, [setCurrentPosition]);

    return (
        <HallStruct style={{ gridTemplateRows: '40px auto 60px' }}>
            <TopPanel>
                <SearchInput />
                <SearchButton>
                    <SearchIcon/>
                </SearchButton>
            </TopPanel>
            <BodyComponent></BodyComponent>
            <BottomComponent />
        </HallStruct>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

export default connect(null, mapDispatchToProps)(Search);
