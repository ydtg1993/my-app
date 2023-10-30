import * as Actions from './actions';
import {fromJS, List, Map} from 'immutable';

const defaultState = fromJS({
    comic:Map({title:''}),
    chapters:List()
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.COMIC_DETAIL:
            if(action.data.chapters.length>0){
                let chapters = action.data.chapters;
                action.data.chapters = [];
                return state.set('comic',action.data).set('chapters',chapters);
            }
            action.data.chapters = null;
            return state.set('comic',action.data);
        case Actions.COMIC_CHAPTERS:
            return state.set('chapters',action.data);
        case Actions.COMIC_DETAIL_CLEAR:
            return state.set('comic',fromJS({})).set('chapters',List());
        default:
            return state
    }
};

