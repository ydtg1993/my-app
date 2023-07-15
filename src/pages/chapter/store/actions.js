import axios from 'axios';

import React from "react";
import {Host} from "../../../index";
import Toast from "../../component/toast";

export const CHAPTER_DETAIL = 'chapter_detail';
export const CHAPTER_DETAIL_CLEAR = 'chapter_detail_clear';

export const GetChapter = (id)=>{
    return async (dispatch) => {
        try {
            const res = await axios.get(Host + 'chapter/'+id);
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: CHAPTER_DETAIL,
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

export const ClearChapter = ()=>({
    type:CHAPTER_DETAIL_CLEAR
});



