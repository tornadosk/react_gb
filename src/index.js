import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './Routes';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <Routes /></Provider>,
    document.getElementById('root'));


