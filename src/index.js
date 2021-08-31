import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router

} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './_pages/App';

render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
    </React.StrictMode>,
    document.getElementById('app')
);