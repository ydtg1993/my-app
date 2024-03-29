import axios from 'axios';
import {Host} from "../../../../index";
import Toast from "../../../component/toast";

export const SEARCH_RESULT = 'search_result';
export const SEARCH_RESULT_MORE = 'search_result_more';

export const GetSearch = (keyword, p, loadMore) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(Host + 'search', {words: keyword, p: p});
            let data = res.data;
            if (data.code === 0) {
                if (loadMore) {
                    dispatch({
                        type: SEARCH_RESULT_MORE,
                        data: data.data,
                        page: p + 1,
                    });
                    return;
                }
                dispatch({
                    type: SEARCH_RESULT,
                    data: data.data,
                    page: p + 1,
                    words: keyword,
                });
            } else {
                Toast.info(data.message);
            }
        } catch (error) {
            Toast.error('服务器开小差了', 1000);
        }
    };
};
