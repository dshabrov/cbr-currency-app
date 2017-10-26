import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

class DataGrid extends Component {
    constructor(props) {
        super(props);

        this.rowGetter = this.rowGetter.bind(this);
    }

    rowGetter(i) {
        return this.props.data[i];
    };

    getColumns() {
        return [           
            { key: 'CharCode', name: 'Currency' },
            { key: 'Value', name: 'Value' },
            { key: 'Name', name: 'Description' } 
        ];
    }
    
    render() {
        return (
            <div className='currencyGrid'>
                <ReactDataGrid
                    columns={this.getColumns()}
                    rowGetter={this.rowGetter}
                    rowsCount={this.props.data.length}
                />
            </div>
        ); 
    }
}
      
export default DataGrid;