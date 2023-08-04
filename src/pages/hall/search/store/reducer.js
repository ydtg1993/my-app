import * as Actions from './actions';
import { fromJS,List } from 'immutable';

const defaultState = fromJS({
    searchWords:"",
    searchResult:List(),
    searchPage:0
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SEARCH_RESULT:
            let p = action.page;
            if(action.data.empty === 1){
                p = -1;
            }
            return state
                .set('searchPage',p)
                .set('searchWords',action.words)
                .set('searchResult',List(action.data.comics));

        case Actions.SEARCH_RESULT_MORE:
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