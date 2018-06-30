import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

const theme = {
    primary: 'orange',
    secondary: 'darkorange',
    tertiary: 'orangered',
    background: '#ffecb1'
};

injectGlobal`
    /* Remove default browser styling and apply project-wide styles. */
    *,
    *::after,
    *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    /* Setting the root font size (for rem purposes). */
    html {
        font-size: 62.5%;
    }

    /* Always apply site-wide fonts to the body element; not the universal selector */
    body {
        /* background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%); */
        background-color: #ffecb1;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    ::placeholder {
        color: black;
    }
`;

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
