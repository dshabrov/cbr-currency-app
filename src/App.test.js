import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DataGrid from './components/DataGrid';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import ReactDataGrid from 'react-data-grid';

import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

function setup() {
 
  const props = {
    data: [
      {CharCode: 'USD', Value: '15.15', Name: 'American Dollar'},
      {CharCode: 'PLN', Value: '10.15', Name: 'Palish Zloty'},
    ]
  }

  const enzymeWrapper = mount(<DataGrid {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


describe('components', () => {
  describe('Header', () => {
    const { enzymeWrapper, props } = setup();

    it('should render self and subcomponents', () => {
      expect(enzymeWrapper.containsAnyMatchingElements([<ReactDataGrid />])).toEqual(true);
    })

    it('should rendered with class name "currencyGrid"', () => {
      expect(enzymeWrapper.is('.currencyGrid')).toEqual(true);
    });
    
    it('should render data in grid', () => {
      
      expect(enzymeWrapper.contains(<div title="USD">USD</div>)).toEqual(true);
    });
    
  })
})



