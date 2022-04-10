import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ borderBottom: '1px solid black', backgroundColor: '#fff' }}>
                <Toolbar variant='dense' sx={{ justifyContent: 'end' }}>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
