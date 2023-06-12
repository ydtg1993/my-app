import axios from 'axios';
import Toast from "../../component/toast";
import {Host} from "../../../index";
import React from "react";

export const HOME_PAGE_SERIES = 'home_page_series';

export const GetHomePage = () => {
    return (dispatch) => {
        /*axios.post(Host + 'home/series', {}, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: HOME_PAGE_SERIES,
                    data:data.data
                });
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });*/
    }
};

export const ajaxHeaders = function () {
    return {headers: {'Content-Type': 'application/json', 'Authorization': 'Token '}, timeout: 3000};
};



