import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useLikePost = () => {
    const onLikePost = React.useCallback((id, callback) => {
        async function likePost() {
            await fetch(`https://api.react-learning.ru/posts/likes/${id}`, {
                method: 'PUT',
                headers: { Authorization: AUTHORIZATION }
            });
            callback();
        }
        likePost();
    });
    return onLikePost;
}

export { useLikePost };
