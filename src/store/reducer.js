import { combineReducers } from 'redux';

import HallReducer from '../pages/hall/store/reducer';


export default combineReducers({
    hall:HallReducer,
})