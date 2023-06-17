import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    currentPosition:'home',
    homePageSeries:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.CURRENT_POSITION:
            return state.set('currentPosition',action.position);
        case Actions.HOME_PAGE_SERIES:
            return state.set('homePageSeries',action.list);
        default:
            return state
    }
};

