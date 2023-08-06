import { openDB, deleteDB, wrap, unwrap } from 'idb';

const DB_VERSION = 1;
const DB_NAME = 'dmwon';
export const READ_HISTORY_LIST = 'read_history_list';

export const GetReadHistoryList = ()=>{
    return async (dispatch) => {
        try {
            const db = await openDB(DB_NAME, DB_VERSION);

            const transaction = db.transaction(DB_NAME, 'readonly');
            const store = transaction.objectStore(DB_NAME);

            const data = await store.getAll();
            dispatch({
                type: READ_HISTORY_LIST,
                data: data,
            });
        } catch (error) {
            console.error(`Error reading ${READ_HISTORY_LIST } from IndexedDB`, error);
        }
    };
};

export const RecordReadHistory = (item) => {
    return async (dispatch) => {
        try {
            const db = await openDB(DB_NAME, DB_VERSION, {
                upgrade(db) {
                    if (!db.objectStoreNames.contains(READ_HISTORY_LIST)) {
                        db.createObjectStore(READ_HISTORY_LIST,{
                            keyPath: 'comic_id',
                            unique: true,
                        });
                    }
                },
            });

            const transaction = db.transaction(READ_HISTORY_LIST, 'readwrite');
            const store = transaction.objectStore(READ_HISTORY_LIST);

            const existingItem = await store.get(item.comic_id);
            if (existingItem) {
                await store.put(item);
            } else {
                const storeLength = await store.count();
                if (storeLength >= 200) {
                    const oldestItems = await store.getAll(null, 1);
                    if (oldestItems && oldestItems.length > 0) {
                        await store.delete(oldestItems[0].comic_id);
                    }
                }
                await store.add(item);
            }
            const data = await store.getAll();
            dispatch({
                type: READ_HISTORY_LIST,
                data: data,
            });
        } catch (error) {
            console.error(`Error setting ${READ_HISTORY_LIST } from IndexedDB`, error);
        }
    };
};
