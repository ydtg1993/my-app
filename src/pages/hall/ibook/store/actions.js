import localForage from 'localforage';

export const READ_HISTORY_LIST = 'read_history_list';

export const GetReadHistoryList = () => {
    return async (dispatch) => {
        try {
            const data = await localForage.getItem(READ_HISTORY_LIST) || [];
            dispatch({
                type: READ_HISTORY_LIST,
                data: data,
            });
        } catch (error) {
            console.error(`Error reading ${READ_HISTORY_LIST} from localForage`, error);
        }
    };
};

export const GetReadComicRecord = async (comic_id) => {
    let result = null;
    try {
        let data = await localForage.getItem(READ_HISTORY_LIST) || [];
        const existingIndex = data.findIndex((entry) => entry.comic_id === comic_id);
        if (existingIndex !== -1) result = data[existingIndex];
    } catch (error) {
        console.error(`Error setting ${READ_HISTORY_LIST} in localForage`, error);
    }
    return result;
};

export const RemoveReadHistory = (comic_id) => {
    return async (dispatch) => {
        try {
            let data = await localForage.getItem(READ_HISTORY_LIST) || [];
            const existingIndex = data.findIndex((entry) => entry.comic_id === comic_id);
            if (existingIndex !== -1) data.splice(existingIndex, 1);
            await localForage.setItem(READ_HISTORY_LIST, data);
            dispatch({
                type: READ_HISTORY_LIST,
                data: data,
            });
        } catch (error) {
            console.error(`Error setting ${READ_HISTORY_LIST} in localForage`, error);
        }
    };
};

export const RecordReadHistory = (item) => {
    return async (dispatch) => {
        try {
            let data = await localForage.getItem(READ_HISTORY_LIST) || [];
            const existingIndex = data.findIndex((entry) => entry.comic_id === item.comic_id);

            if (existingIndex !== -1) {
                data[existingIndex] = item;
            } else {
                if (data.length >= 300) {
                    data.pop();
                }
                data.unshift(item);
            }
            await localForage.setItem(READ_HISTORY_LIST, data);

            dispatch({
                type: READ_HISTORY_LIST,
                data: data,
            });
        } catch (error) {
            console.error(`Error setting ${READ_HISTORY_LIST} in localForage`, error);
        }
    };
};
