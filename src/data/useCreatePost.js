import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useCreatePost = () => {
    const onCreatePost = React.useCallback((fromFields, callback) => {
        async function createPost() {
            await fetch(`https://api.react-learning.ru/posts`, {
                method: 'POST',
                headers: {
                    Authorization: AUTHORIZATION,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(fromFields)
            });
            callback();
        }
        createPost();
    });
    return onCreatePost;
}

export { useCreatePost };
