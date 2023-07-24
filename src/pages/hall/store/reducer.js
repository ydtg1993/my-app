import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    currentPosition:'home',
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.CURRENT_POSITION:
            return state.set('currentPosition',action.position);
        default:
            return state
    }
};

