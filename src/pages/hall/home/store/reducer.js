import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    series:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SERIES:
            return state.set('series',action.data);
        default:
            return state
    }
};

