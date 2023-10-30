import axios from 'axios';
import {Host} from "../../../index";
import Toast from "../../component/toast";

export const COMIC_DETAIL = 'comic_detail';
export const COMIC_CHAPTERS = 'comic_chapters';
export const COMIC_DETAIL_CLEAR = 'comic_detail_clear';

export const GetComic = (id)=>{
    return async (dispatch) => {
        try {
            const res = await axios.get(Host + 'comic/'+id);
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: COMIC_DETAIL,
                    data: data.data
                });
            } else {
                Toast.info(data.message);
            }
        } catch (error) {
            Toast.error('服务器开小差了', 1000);
        }
    };
};

export const GetChapters = (id)=>{
    return async (dispatch) => {
        try {
            const res = await axios.get(Host + 'chapter_list/'+id);
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: COMIC_CHAPTERS,
                    data: data.data
                });
            } else {
                Toast.info(data.message);
            }
        } catch (error) {
            Toast.error('服务器开小差了', 1000);
        }
    };
};

export const ClearComic = ()=>({
    type:COMIC_DETAIL_CLEAR
});


