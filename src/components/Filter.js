import React, { Component } from 'react';
import SelectBox from 'react-select-box';
import DatePicker from 'react-bootstrap-date-picker';

class Filter extends Component {

    constructor() {
        super();
        this.handleCurrListChange = this.handleCurrListChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleCurrListChange (currList) {
        this.props.currencyFilterChanged(currList)
    }

    handleDateChange(date, formattedDate) {
        this.props.dateFilterChanged({value: date, formattedDate}) ;
        this.props.clearData();
        this.props.getData(formattedDate);
    }

    render() {
        const dateValue = this.props.date.value;

        return (
            <div className='filterElements'>
                <label>Date:</label>
                <div className='dateFilter'>
                    <DatePicker 
                        value={dateValue} 
                        onChange={this.handleDateChange}
                    />   
                </div>
                <label>Currency:</label>
                <div className='currencyFilter'>
                    <SelectBox
                        label = 'select currency...'
                        multiple = {true}
                        value = {this.props.selectedCurrList}
                        onChange={this.handleCurrListChange}
                        >
                        {getValues(this.props.availableCurrList)}
                    </SelectBox>
                </div>
            </div>     
        );
    }
}

const getValues = (currList) => {
    if (currList == null || currList.length === 0)
        return null;
    else {
        return currList.map(item => <option value={item} key={item}>{item}</option>);
    }
}

export default Filter;
