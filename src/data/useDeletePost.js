import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useDeletePost = () => {
    const onDeletePost = React.useCallback((id, callback) => {
        async function deletePost() {
            await fetch(`https://api.react-learning.ru/posts/${id}`, {
                method: 'DELETE',
                headers: { Authorization: AUTHORIZATION }
            });
            callback();
        }
        deletePost();
    });
    return onDeletePost;
}

export { useDeletePost };
