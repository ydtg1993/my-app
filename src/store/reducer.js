import { combineReducers } from 'redux';

import HallReducer from '../pages/hall/store/reducer';
import HomeReducer from '../pages/hall/home/store/reducer';
import ComicReducer from '../pages/comic/store/reducer';

export default combineReducers({
    hall:HallReducer,
    home:HomeReducer,
    comic:ComicReducer,
})