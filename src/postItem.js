import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function PostItem({ post }) {
    if (!post) {
        return null;
    }

    return (
        <Item>
            <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.300', p: 2, height: '50px' }}>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                    sx={{ fontWeight: 900 }}
                >
                    {post.title}
                </Link>
            </Box>
            <Box sx={{ p: 1, m: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={post.author.name} src={post.author.avatar} />
                    <Box sx={{ paddingLeft: '10px' }}>{post.author.email}</Box>
                </Box>
            </Box>
            <Box sx={{ p: 1, m: 1, fontWeight: 400 }}>
                {post.text}
            </Box>
            {post.tags && post.tags.length > 0 &&
                <Box sx={{ p: 1, m: 1, fontWeight: 400 }}>
                    Tags: {post.tags.map(tag => (<Chip key={tag} label={tag}></Chip>))}
                </Box>
            }

            <Box sx={{ p: 1, m: 1 }}>
                <Stepper orientation="vertical">
                    <Step>
                        <StepLabel>{new Date(post.created_at).toLocaleString()}</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>{`Last edit ${new Date(post.updated_at).toLocaleString()}`}</StepLabel>
                    </Step>
                </Stepper>
            </Box>

        </Item>
    );
}

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: '#fff',
                color: 'grey.800',
                border: '1px solid',
                borderColor: 'grey.300',
                m: 5,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                width: '300px',
                ...sx,
            }}
            {...other}
        />
    );
}