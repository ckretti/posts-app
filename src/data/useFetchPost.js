import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useFetchPost = (id) => {
    const [data, setData] = React.useState(null);

    async function fetchPost() {
        const postResponse = await fetch(`https://api.react-learning.ru/posts/${id}`, {
            headers: { Authorization: AUTHORIZATION }
        });
        const post = await postResponse.json();
        setData(post);
    }

    React.useEffect(() => {
        fetchPost();
    }, []);
    return { data, fetchPost };
}

export { useFetchPost };
