import { combineReducers } from 'redux';

import HallReducer from '../pages/hall/store/reducer';
import HomeReducer from '../pages/hall/home/store/reducer';
import MenuReducer from '../pages/hall/menu/store/reducer';
import SearchReducer from '../pages/hall/search/store/reducer';
import IBookReducer from '../pages/hall/ibook/store/reducer';
import ComicReducer from '../pages/comic/store/reducer';
import ChapterReducer from '../pages/chapter/store/reducer';

export default combineReducers({
    hall:HallReducer,
    home:HomeReducer,
    menu:MenuReducer,
    search:SearchReducer,
    iBook:IBookReducer,
    comic:ComicReducer,
    chapter:ChapterReducer,
})