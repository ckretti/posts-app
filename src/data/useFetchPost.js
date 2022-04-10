import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useFetchPost = (id) => {
    const [data, setData] = React.useState(null);

    const fetchPost = errorHandler(async function () {
        const postResponse = await fetch(`https://api.react-learning.ru/posts/${id}`, {
            headers: { Authorization: AUTHORIZATION }
        });
        const post = await postResponse.json();
        setData(post);
    });

    React.useEffect(() => {
        fetchPost();
    }, []);
    return { data, fetchPost };
}

export { useFetchPost };
