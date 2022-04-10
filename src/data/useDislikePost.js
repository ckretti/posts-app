import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useDislikePost = () => {
    const onDislikePost = React.useCallback((id, callback) => {
        const dislikePost = errorHandler(async function () {
            await fetch(`https://api.react-learning.ru/posts/likes/${id}`, {
                method: 'DELETE',
                headers: { Authorization: AUTHORIZATION }
            });
            callback();
        });
        dislikePost();
    });
    return onDislikePost;
}

export { useDislikePost };
