import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    series:[],
    seriesEmpty:0
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SERIES:
            return state.set('series',state.get('series').concat(action.data.series))
                .set('seriesEmpty', action.data.empty);
        default:
            return state
    }
};

