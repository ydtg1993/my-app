import axios from 'axios';
import {Host} from "../../../../index";
import Toast from '../../../component/toast';

export const SERIES = 'series';

export const GetHomeSeries = (p)=>{
    return async (dispatch) => {
        try {
            const res = await axios.post(Host + 'series', { p: p });
            let data = res.data;
            if (data.code === 0) {
                dispatch({
                    type: SERIES,
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


