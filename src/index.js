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
import DetailPage from './post-detail/detailPage';

const MOUNT_NODE = document.getElementById('root');

const theme = createTheme();

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<App />} />
                    <Route path="post-detail/:postId" element={<DetailPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MuiThemeProvider>
    </React.StrictMode>,
    MOUNT_NODE,
);
