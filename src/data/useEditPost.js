import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useEditPost = () => {
    const onEditPost = React.useCallback((id, fromFields, callback) => {
        async function editPost() {
            await fetch(`https://api.react-learning.ru/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: AUTHORIZATION,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(fromFields)
            });
            callback();
        }
        editPost();
    });
    return onEditPost;
}

export { useEditPost };
