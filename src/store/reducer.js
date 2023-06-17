import { combineReducers } from 'redux';

import HomeReducer from '../pages/hall/home/store/reducer';


export default combineReducers({
    home:HomeReducer,
})