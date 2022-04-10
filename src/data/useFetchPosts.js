import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useFetchPosts = () => {
    const [data, setData] = React.useState(null);

    const fetchPosts = errorHandler(async function () {
        const postsResponse = await fetch('https://api.react-learning.ru/posts', {
            headers: { Authorization: AUTHORIZATION }
        });
        const posts = await postsResponse.json();
        setData(posts);
    });

    React.useEffect(() => {
        fetchPosts();
    }, []);
    return { data, fetchPosts };
}

export { useFetchPosts };
