import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    searchWords:"",
    searchResult:[],
    searchPage:0
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SEARCH_RESULT:
            if (action.data.empty === 1) {
                return state.set('searchPage',-1);
            } else {
                return state
                    .set('searchPage',action.page)
                    .set('searchResult',state.get('searchResult').concat(action.data.comics));
            }
        default:
            return state
    }
};

