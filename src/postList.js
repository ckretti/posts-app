import React from 'react';

import { UserContext } from './userContext/userContext'

import Box from '@mui/material/Box';
import Link from '@mui/material/Link'

import PostItem from './postItem';
import EntityModal from './entityModal';

import { useFetchPosts } from './data/useFetchPosts';
import { useDeletePost } from './data/useDeletePost';
import { useLikePost } from './data/useLikePost';
import { useDislikePost } from './data/useDislikePost';

export default function PostList() {
    const [open, setVisibility] = React.useState();
    const [editingPost, setEditingPost] = React.useState(null);

    const userData = React.useContext(UserContext);

    const { data: posts, fetchPosts } = useFetchPosts();
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

    const onEditPost = (post) => {
        setVisibility(true);
        setEditingPost(post);
    }

    const onCloseForm = () => {
        setVisibility(false);
        setEditingPost(null)
    }

    if (!posts || !userData) {
        return null;
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                pt: 3,
                pr: 6
            }}>
                <Link
                    component='button'
                    variant='body2'
                    onClick={() => {
                        setVisibility(true);
                    }}
                    sx={{ color: 'info.main' }}
                >
                    Add item
                </Link>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                justifyContent: 'center',
                width: '1048px',
                margin: 'auto'
            }}>

                {posts.map((post) => (
                    <PostItem
                        isMyPost={!!post.author && post.author.email === userData.email}
                        hasLike={post.likes.some(x => x === userData._id)}
                        post={post}
                        key={post._id}
                        deleteItem={deleteItem}
                        onDislike={dislikeItem}
                        onLike={likeItem}
                        onEditPost={onEditPost}
                    />
                ))}
            </Box>
            {open &&
                <EntityModal
                    item={editingPost}
                    open={open}
                    onCloseForm={onCloseForm}
                    fetchPosts={fetchPosts}
                />
            }
        </>
    );
}
