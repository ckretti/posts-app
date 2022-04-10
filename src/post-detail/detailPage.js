import React from 'react';

import { useParams, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

import { useFetchPost } from '../data/useFetchPost';

export default function DetailPage() {
    const params = useParams();
    const navigate = useNavigate();

    const { data } = useFetchPost(params.postId);

    const onBack = () => {
        navigate('/');
    }

    if (!data) {
        return null;
    }

    return (
        <Box sx={{ m: 1, p: 1 }}>
            <Box>
                <IconButton aria-label="like" onClick={onBack} color="primary" >
                    <ArrowBackIcon />
                </IconButton>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Box sx={{ mt: 2 }}>

                    <img src={data.image} />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h4" component="h3">
                        Title: {data.title}
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    Text: {data.text}
                </Box>
                <Box sx={{ mt: 2 }}>
                    Tags: {data.tags && data.tags.map((tag, index) => <React.Fragment key={index}>{tag}{' '}</React.Fragment>)}
                </Box>
                <Box sx={{ mt: 2 }}>
                    Created at: {new Date(data.created_at).toLocaleString()}
                </Box>
                <Box sx={{ mt: 2 }}>
                    Updated at: {new Date(data.updated_at).toLocaleString()}
                </Box>
            </Box>
        </Box>
    );
}
