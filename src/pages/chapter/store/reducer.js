import * as Actions from './actions';
import { fromJS} from 'immutable';
import {CHAPTER_DETAIL} from "./actions";

const defaultState = fromJS({
    chapter:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.CHAPTER_DETAIL:
            return state.set('chapter',action.data);
        case Actions.CHAPTER_DETAIL_CLEAR:
            return state.set('chapter',fromJS([]));
        default:
            return state
    }
};

