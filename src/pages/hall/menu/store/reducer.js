import * as Actions from './actions';
import { fromJS ,List } from 'immutable';

const defaultState = fromJS({
    genreList:List(),
    genrePage:0,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.MENU_LIST:
            if (action.data.empty === 1) {
                return state.set('genrePage',-1);
            } else {
                return state
                    .set('genrePage',action.page)
                    .set('genreList',state.get('genreList').concat(action.data.comics));
            }
        default:
            return state
    }
};

