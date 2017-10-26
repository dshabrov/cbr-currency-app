import Request from '../service';

export const GET_DATA = 'GET_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';
export const DATA_LOADED = 'DATA_LOADED';
export const DATA_FAILED = 'DATA_FAILED';

export function clearData() {
    return {
        type: CLEAR_DATA
    }
}

export function getData(date) {
    return (dispatch, getState) => {

        dispatch({
            type: GET_DATA,
            payload: []
        })

        Request(date)
            .then((response) => {
                dispatch({
                    type: DATA_LOADED,
                    payload: response
                })
            })
            .catch(error => {
                dispatch({ 
                    type: DATA_FAILED, 
                    payload: error.message 
                });
                throw error;
            }); 
    }
}
