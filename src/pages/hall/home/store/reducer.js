import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    homePageSeries:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.HOME_PAGE_SERIES:
            return state.set('homePageSeries',action.list);
        default:
            return state
    }
};

