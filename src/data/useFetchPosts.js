import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useFetchPosts = () => {
    const [data, setData] = React.useState(null);

    async function fetchPosts() {
        const postsResponse = await fetch('https://api.react-learning.ru/posts', {
            headers: { Authorization: AUTHORIZATION }
        });
        const posts = await postsResponse.json();
        setData(posts);
    }

    React.useEffect(() => {
        fetchPosts();
    }, []);
    return { data, fetchPosts };
}

export { useFetchPosts };
