import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useLikePost = () => {
    const onLikePost = React.useCallback((id, callback) => {
        const likePost = errorHandler(async function () {
            await fetch(`https://api.react-learning.ru/posts/likes/${id}`, {
                method: 'PUT',
                headers: { Authorization: AUTHORIZATION }
            });
            callback();
        });
        likePost();
    });
    return onLikePost;
}

export { useLikePost };
