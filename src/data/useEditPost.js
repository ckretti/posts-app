import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useEditPost = () => {
    const onEditPost = React.useCallback((id, fromFields, callback) => {
        const editPost = errorHandler(async function () {
            await fetch(`https://api.react-learning.ru/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: AUTHORIZATION,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(fromFields)
            });
            callback();
        });
        editPost();
    });
    return onEditPost;
}

export { useEditPost };
