import * as Actions from './actions';
import { fromJS,List} from 'immutable';

const defaultState = fromJS({
    chapter:List()
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.CHAPTER_DETAIL:
            return state.set('chapter',action.data);
        case Actions.CHAPTER_DETAIL_CLEAR:
            return state.set('chapter',List());
        default:
            return state
    }
};