import { combineReducers } from 'redux';

import HomeReducer from '../pages/home/store/reducer';


export default combineReducers({
    home:HomeReducer,
})