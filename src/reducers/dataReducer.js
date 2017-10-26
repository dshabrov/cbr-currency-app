import { 
    CLEAR_DATA,
    GET_DATA, 
    DATA_LOADED,
    DATA_FAILED
} from '../actions/dataActions';

export default function dataReducer(state = {}, action) {
    switch (action.type) {
        case CLEAR_DATA:
            return { 
                ...state, 
                data: [],
                dataError: ""
            }
        case GET_DATA:
            return { 
                ...state, 
                dataIsFetching: true
            }         
        case DATA_LOADED:
            return {
                ...state, 
                data: action.payload, 
                dataIsFetching: false,
                dataError: ""
            };
        case DATA_FAILED:
            return {
                ...state, 
                data: [], 
                dataError:action.payload, 
                dataIsFetching: false
            };
          
        default: return state;
    }
}