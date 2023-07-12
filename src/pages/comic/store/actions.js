import axios from 'axios';

import React from "react";
import {Host} from "../../../index";
import Toast from "../../component/toast";

export const COMIC_DETAIL = 'comic_detail';

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


