import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

import App from './app';

const MOUNT_NODE = document.getElementById('root');

const theme = createTheme();

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </React.StrictMode>,
    MOUNT_NODE,
);
