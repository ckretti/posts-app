import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ borderBottom: '1px solid black', backgroundColor: '#fff' }}>
                <Toolbar variant='dense' sx={{ justifyContent: 'end' }}>
                    <Link
                        component='button'
                        variant='body2'
                        onClick={() => {
                            console.info('Есть контакт');
                        }}
                        sx={{ color: 'info.main' }}
                    >
                        Add item
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
