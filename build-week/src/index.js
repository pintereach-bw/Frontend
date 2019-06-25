import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import reducer from "./reducer";

axios.defaults.withCredentials = true;

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));

