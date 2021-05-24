import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './Routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <Routes />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


