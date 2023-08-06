import * as Actions from './actions';
import { fromJS,Map} from 'immutable';

const defaultState = fromJS({
    chapter:Map()
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.CHAPTER_DETAIL:
            return state.set('chapter',Map(action.data));
        case Actions.CHAPTER_DETAIL_CLEAR:
            return state.set('chapter',Map());
        default:
            return state
    }
};