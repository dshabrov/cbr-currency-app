import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import confugureStore from './store/configureStore.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/react-select-box/example/select-box.css'
import './styles/index.css';

const store = confugureStore();

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
