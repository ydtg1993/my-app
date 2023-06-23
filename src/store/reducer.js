import { combineReducers } from 'redux';

import HallReducer from '../pages/hall/store/reducer';
import HomeReducer from '../pages/hall/home/store/reducer';

export default combineReducers({
    home:HomeReducer,
    hall:HallReducer,
})