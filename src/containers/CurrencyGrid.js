import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DataGrid from '../components/DataGrid';
import { getData } from '../actions/dataActions';

const filterData = (data, filter) => {
    if (data.length > 0 && filter.length > 0)
        return data.filter(item => filter.indexOf(item["CharCode"]) !== -1);
    return data;
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: filterData(state.data.data, state.filter.selectedCurrList),
        dataIsFetching: state.data.dataIsFetching,
        dataError: state.data.dataError,
    };
}

const mapStateToActions = (dispatch) => {
    return bindActionCreators({
        getData
    },
    dispatch);
}

class CurrencyGrid extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        const {data, dataIsFetching, dataError} = this.props;
        return (
            <div className='gridContainer'>
                {dataError !== "" ? <p>{dataError}</p> : <DataGrid data={data} /> }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapStateToActions)(CurrencyGrid);
