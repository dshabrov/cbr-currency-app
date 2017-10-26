import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Filter from './components/Filter';
import DataGrid from './components/DataGrid';
import { currencyFilterChanged, dateFilterChanged } from './actions/filterActions';
import { getData, clearData } from './actions/dataActions';

const extractCurrencies = (data, availableCurrList) => {
  if (data.length > 0)
    return data.map(item => item["CharCode"])
  else
    return availableCurrList;
}

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    availableCurrList: extractCurrencies(state.data.data, state.filter.availableCurrList),
    selectedCurrList: state.filter.selectedCurrList,
    date: state.filter.date,
    data: state.data.data
  }
}

const mapStateToActions = (dispatch) => {
  return bindActionCreators({
    currencyFilterChanged,
    dateFilterChanged,
    getData,
    clearData
  },
    dispatch)
}

class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  filterData(data, filter) {
    if (data.length > 0 && filter.length > 0)
      return data.filter(item => filter.includes(item["CharCode"]));
    return data;
  }

  render() {
    const {
      selectedCurrList,
      data
    } = this.props;

    const filteredData = this.filterData(data, selectedCurrList);
    //const extractedCurrencies = this.extractCurrencies(data);

    return (
      <div className='AppContainer'>
        <h2>CBR Currency</h2>
        <div className='App'>
          <Filter
            className='filter'
            {...this.props}
          />
          <DataGrid data={filteredData} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapStateToActions)(App);
