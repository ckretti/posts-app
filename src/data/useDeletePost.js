import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useDeletePost = () => {
    const onDeletePost = React.useCallback((id, callback) => {
        const deletePost = errorHandler(async function () {
            await fetch(`https://api.react-learning.ru/posts/${id}`, {
                method: 'DELETE',
                headers: { Authorization: AUTHORIZATION }
            });
            callback();
        });
        deletePost();
    });
    return onDeletePost;
}

export { useDeletePost };
