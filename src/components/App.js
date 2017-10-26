import React from 'react';
import '../styles/App.css';
import DataFilter from '../containers/DataFilter';
import CurrencyGrid from '../containers/CurrencyGrid';
import { Button } from 'react-bootstrap';

const App = () => {
    return (
        <div className='AppContainer'>
            <h2>CBR Currency</h2>
            <Button>Button</Button>
            <div className='App'>
                <DataFilter />
                <CurrencyGrid />
            </div>
        </div>
    );
}

export default App;
