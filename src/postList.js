import React from 'react';

import Box from '@mui/material/Box';

import PostItem from './postItem';

import { postData } from './data/posts';

export default function PostList() {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            justifyContent: 'center',
            width: '1048px',
            margin: 'auto'
        }}>
            {postData.map((post) => (
                <PostItem post={post} key={post._id} />
            ))}
        </Box>
    );
}
