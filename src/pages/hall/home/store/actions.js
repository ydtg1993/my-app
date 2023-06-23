import axios from 'axios';

import React from "react";
import {Host} from "../../../../index";
import Toast from '../../../component/toast';

export const SERIES = 'series';

export const GetSeries = (p)=>{
    return (dispatch)=>{
        axios.post(Host+'series',{p:p}).then((res)=>{
            let data = res.data;
            if(data.code === 0){
                dispatch({
                    type:SERIES,
                    data:data.data
                })
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            Toast.error('服务器开小差了',1000);
        });
    }
};


