import * as Actions from './actions';
import {fromJS, List} from 'immutable';

const defaultState = fromJS({
    readHistoryList:List()
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.READ_HISTORY_LIST:
            return state.set('readHistoryList',List(action.data));
        default:
            return state;
    }
};

