import React from 'react';

import pick from 'lodash/pick';

import { useForm } from "react-hook-form";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useCreatePost } from '../data/useCreatePost';
import { useEditPost } from '../data/useEditPost';

export default function EntityModal({
    open,
    onCloseForm,
    item,
    fetchPosts
}) {
    const isNew = !item;

    const createPost = useCreatePost();
    const editPost = useEditPost();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: !!item ? pick({ ...item }, 'title', 'text', 'image', 'tags') : null
    });
    const onSubmit = (data) => {
        const payLoad = {
            ...data,
            tags: Array.isArray(data.tags) ? data.tags : data.tags.split(/[\s,;]+/)
        };

        isNew
            ? createPost(payLoad, fetchPosts)
            : editPost(item._id, payLoad, fetchPosts);
        onCloseForm();
    };

    return (
        <Modal
            open={open}
            onClose={onCloseForm}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {isNew ? 'Create Post' : 'Update Post'}
                </Typography>
                <Box sx={{ display: 'flex', pt: 2 }}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '400px' }}>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                label="Post title"
                                variant="outlined"
                                {...register("title", { required: true, maxLength: 20 })}
                                sx={{ width: '400px' }}
                            />
                            {errors.title && ValidationMessageRender('This field is required. 20 chars allowed.')}
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                label="Description text"
                                variant="outlined"
                                {...register("text", { required: true, maxLength: 40 })}
                                sx={{ width: '400px' }}
                            />
                            {errors.text && ValidationMessageRender('This field is required. 40 chars allowed.')}
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                label="Image link"
                                variant="outlined"
                                {...register("image", { required: true, pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/ })}
                                sx={{ width: '400px' }}
                            />
                            {errors.image && ValidationMessageRender('This field is required and must be the url.')}
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                label="Tags"
                                variant="outlined"
                                {...register("tags", { required: true, maxLength: 40 })}
                                sx={{ width: '400px' }}
                            />
                            {errors.tags && ValidationMessageRender('This field is required. 40 chars allowed.')}
                        </Box>
                        <Box></Box>
                        <Box sx={{ pt: 4, display: 'flex', justifyContent: 'space-between' }}>
                            <Button type="submit" variant="contained">{isNew ? 'Add' : 'Save'}</Button>
                            <Button variant="outlined" onClick={onCloseForm}>Close</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Modal>
    );
}

function ValidationMessageRender(message) {
    return (
        <Typography color="red" component="span">{message}</Typography>
    );
}
