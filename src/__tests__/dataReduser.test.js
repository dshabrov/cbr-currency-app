import dataReducer from '../reducers/dataReducer';
import initialState from '../store/defaultState';

describe('Testing the DataReducer', () => {

    it('should equal to default state with unknown action', () => {
        let defaultState = initialState.data;
        let updatedState = dataReducer(defaultState, {type:"SOME_ACTION"});
        
        expect(updatedState).toEqual(defaultState);
    });

    it('should clear state with CLEAR_DATA action', () => {
        let defaultState = {
            data: ['ADSF', "ASDF", "ASDF"],
            dataError: ''
        }
        let updatedState = dataReducer(defaultState, {type:"CLEAR_DATA"});
        
        expect(updatedState).toEqual({data: [], dataError: ''});
    });

    it('should update state with GET_DATA action', () => {
        let defaultState = {
            data: ['ADSF', "ASDF", "ASDF"],
            dataError: '',
            dataIsFetching: false
        }
        let updatedState = dataReducer(defaultState, {type:"GET_DATA"});
        
        expect(updatedState).toEqual({...defaultState, dataIsFetching: true});
    });

});