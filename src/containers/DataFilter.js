import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currencyFilterChanged, dateFilterChanged } from '../actions/filterActions';
import { getData, clearData } from '../actions/dataActions';
import Filter from '../components/Filter';

const extractCurrencies = (data, availableCurrList) => {
    if (data.length > 0)
        return data.map(item => item["CharCode"])
    else
        return availableCurrList;
}

const mapStateToProps = (state, ownProps) => {
    return {
        availableCurrList: extractCurrencies(state.data.data, state.filter.availableCurrList),
        selectedCurrList: state.filter.selectedCurrList,
        date: state.filter.date,
        data: state.data.data
    };
}

const mapStateToActions = (dispatch) => {
    return bindActionCreators({
        currencyFilterChanged,
        dateFilterChanged,
        getData,
        clearData
    }, 
    dispatch);
}

class DataFilter extends Component {
    render() {
        return (
            <Filter {...this.props} />
        );
    }
}

export default connect(mapStateToProps, mapStateToActions)(DataFilter);
