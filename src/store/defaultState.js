const initialState = {
    filter: {
        availableCurrList: ['USD', 'EUR', 'PLN'],
        selectedCurrList: ['USD', 'EUR', 'PLN'],
        date: {
            value: new Date().toISOString(),
            formattedValue: ''
        },
    },
    data: {
        data: [],
        dataIsFetching: false,
        dataError: ''
    }
}

export default initialState;

