import axios from 'axios';
import {Host} from "../../../../index";
import Toast from "../../../component/toast";

export const MENU_LIST = 'menu_list';
export const CHANGE_MENU_LIST = 'change_menu_list';

export const GetMenuList = (p,category)=>{
    return async (dispatch) => {
        try {
            const res = await axios.post(Host + 'menu', { p: p,category:category,finish:-1 });
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: MENU_LIST,
                    data: data.data,
                    page: p + 1,
                });
            } else {
                Toast.info(data.message);
            }
        } catch (error) {
            Toast.error('服务器开小差了', 1000);
        }
    };
};

export const ChangeMenuList = (category)=>{
    return async (dispatch) => {
        try {
            const res = await axios.post(Host + 'menu', { p: 0,category:category,finish:-1 });
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: CHANGE_MENU_LIST,
                    data: data.data,
                    page: 1,
                });
            } else {
                Toast.info(data.message);
            }
        } catch (error) {
            Toast.error('服务器开小差了', 1000);
        }
    };
};





