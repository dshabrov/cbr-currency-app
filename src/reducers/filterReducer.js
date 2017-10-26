import { 
    CURRENCY_FILTER_CHANGED,
    DATE_FILTER_CHANGED
} from '../actions/filterActions';


export default function filterReducer(state = {}, action) {
    switch (action.type) {
        case CURRENCY_FILTER_CHANGED:
            return {
                ...state,  selectedCurrList: action.payload, availableCurrList: action.payload
            };
        case DATE_FILTER_CHANGED:
            return {
                ...state,  date: action.payload
            };
        default: return state;
    }
}