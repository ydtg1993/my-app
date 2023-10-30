import axios from 'axios';
import {Host} from "../../../../index";
import Toast from "../../../component/toast";

export const MENU_LIST = 'menu_list';
export const MENU_CLEAR = 'menu_clear';

export const GetMenuList = (p,params)=>{
    return async (dispatch) => {
        try {
            const res = await axios.post(Host + 'menu', { p: p,category:params[0],region:params[1],status:params[2],sort:params[3] });
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

export const ClearMenuList = ()=>({
    type:MENU_CLEAR
});



