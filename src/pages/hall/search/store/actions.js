import axios from 'axios';

import React from "react";
import {Host} from "../../../../index";
import Toast from "../../../component/toast";

export const SEARCH_RESULT = 'search_result';

export const GetSearch = (keyword,p)=>{
    return async (dispatch) => {
        try {
            const res = await axios.post(Host + 'search', { words: keyword,p:p });
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: SEARCH_RESULT,
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


