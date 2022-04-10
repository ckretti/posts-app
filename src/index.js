import React from 'react';
import ReactDOM from 'react-dom';

import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

import App from './app';
import NotFound from './notFound';

const MOUNT_NODE = document.getElementById('root');

const theme = createTheme();

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MuiThemeProvider>
    </React.StrictMode>,
    MOUNT_NODE,
);
