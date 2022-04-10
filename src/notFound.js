import React from 'react';

import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NotFound() {
    return (
        <Box sx={{ m: 2, p: 2 }}>
            <Typography variant="h6" component="h2">Wrong url</Typography>
            <Box sx={{ mt: 2 }}>
                <Link to="/">To main page</Link>
            </Box>
        </Box>
    );
}
