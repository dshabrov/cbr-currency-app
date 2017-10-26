import { combineReducers } from 'redux'
import filterReducer from './filterReducer';
import dataReducer from './dataReducer';

const mainReducer = combineReducers({
    filter: filterReducer,
    data: dataReducer
})

export default mainReducer;