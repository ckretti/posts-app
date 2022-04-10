import React from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditIcon from '@mui/icons-material/Edit';

export default function PostItem({
    post,
    deleteItem,
    isMyPost,
    hasLike,
    onLike,
    onDislike,
    onEditPost
}) {
    const toggleLike = () => {
        hasLike
            ? onDislike(post._id)
            : onLike(post._id);
    }

    if (!post) {
        return null;
    }

    return (
        <Item>
            <Box>
                <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.300', p: 2, height: '50px' }}>
                    <Typography variant="h6">{post.title}</Typography>
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
                        Tags: {post.tags.map((tag, index) => (
                            <Chip
                                sx={{ ml: index > 0 ? 1 : 0 }}
                                key={tag}
                                label={tag}
                            />
                        ))}
                    </Box>
                }
                {post.likes && post.likes.length > 0 &&
                    <Box sx={{ p: 1, m: 1, fontWeight: 400 }}>
                        Likes: <Chip label={post.likes.length} variant="outlined" />
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
            </Box>

            <Box sx={{ p: 1, m: 1 }}>
                {isMyPost &&
                    <IconButton aria-label="delete" onClick={() => deleteItem(post._id)}>
                        <DeleteIcon />
                    </IconButton>
                }
                <IconButton aria-label="like" onClick={toggleLike} color={hasLike ? "primary" : undefined}>
                    <ThumbUpIcon />
                </IconButton>
                {isMyPost &&
                    <IconButton aria-label="like" onClick={() => onEditPost(post)} color={hasLike ? "primary" : undefined}>
                        <EditIcon />
                    </IconButton>
                }
            </Box>
        </Item>
    );
}

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
