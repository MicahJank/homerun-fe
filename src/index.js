import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import configRedux from './configRedux.js'
import { Provider } from 'react-redux'

import App from './App';
import * as serviceWorker from './serviceWorker';

import './SASS/GeneralStyles.scss';
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";


const store = configRedux()

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
