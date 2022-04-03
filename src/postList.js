import React from 'react';

import Box from '@mui/material/Box';

import PostItem from './postItem';

import { useFetchPosts } from './data/useFetchPosts';
import { useFetchUserData } from './data/useFetchUserData';
import { useDeletePost } from './data/useDeletePost';
import { useLikePost } from './data/useLikePost';
import { useDislikePost } from './data/useDislikePost';

export default function PostList() {
    const { data: posts, fetchPosts } = useFetchPosts();
    const userData = useFetchUserData();
    const onDeletePost = useDeletePost();
    const onLikeItem = useLikePost();
    const onDislikeItem = useDislikePost();

    const deleteItem = (id) => {
        onDeletePost(id, fetchPosts);
    }

    const likeItem = (id) => {
        onLikeItem(id, fetchPosts);
    }
    const dislikeItem = (id) => {
        onDislikeItem(id, fetchPosts);
    }

    if (!posts || !userData) {
        return null;
    }

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            justifyContent: 'center',
            width: '1048px',
            margin: 'auto'
        }}>
            {posts.map((post) => (
                <PostItem
                    canDelete={post.author.email === userData.email}
                    hasLike={post.likes.some(x => x === userData._id)}
                    post={post}
                    key={post._id}
                    deleteItem={deleteItem}
                    onDislike={dislikeItem}
                    onLike={likeItem}
                />
            ))}
        </Box>
    );
}
