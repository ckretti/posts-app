import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useDislikePost = () => {
    const onDislikePost = React.useCallback((id, callback) => {
        async function dislikePost() {
            await fetch(`https://api.react-learning.ru/posts/likes/${id}`, {
                method: 'DELETE',
                headers: { Authorization: AUTHORIZATION }
            });
            callback();
        }
        dislikePost();
    });
    return onDislikePost;
}

export { useDislikePost };
