import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

const theme = {
    primary: 'orange',
    secondary: 'darkorange',
    tertiary: 'orangered'
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
