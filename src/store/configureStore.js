import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import initialState from '../store/defaultState';
import mainReducer from '../reducers';

export default function configureStore() {
  const middlewares = [thunk];
    
  return createStore(
    mainReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    ),
  );
}
