import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    series:[],
    seriesEmpty:0
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SERIES:
            if (action.data.empty === 1) {
                return state.set('seriesEmpty', 1);
            } else {
                return state.set('series',state.get('series').concat(action.data.series));
            }
        default:
            return state
    }
};

