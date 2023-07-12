import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    comic:{}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.COMIC_DETAIL:
            return state.set('comic',action.data);
        default:
            return state
    }
};

