export const CURRENCY_FILTER_CHANGED = 'CURRENCY_FILTER_CHANGED';
export const DATE_FILTER_CHANGED = 'DATE_FILTER_CHANGED';

export function currencyFilterChanged(currList) {
    return {
        type: CURRENCY_FILTER_CHANGED,
        payload: currList
    }
}

export function dateFilterChanged(date) {
    return {
        type: DATE_FILTER_CHANGED,
        payload: date
    }
}