import axios from 'axios';
import Toast from "../../component/toast";
import {Host} from "../../../index";
import React from "react";

export const GetSearchPage = () => {
    return (dispatch) => {
        axios.post(Host + 'search/recommend', {}, ajaxHeaders()).then((res) => {
            let data = res.data;

        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};


export const ajaxHeaders = function () {
    return {headers: {'Content-Type': 'application/json', 'Authorization': 'Token '}, timeout: 3000};
};



