import React from 'react';

import { errorHandler } from '../infrastructure/error-handler';

import { AUTHORIZATION } from './api-constants';

const useFetchUserData = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchUserData = errorHandler(async function () {
            const userDataResponse = await fetch('https://api.react-learning.ru/users/me', {
                headers: { Authorization: AUTHORIZATION }
            });
            const userData = await userDataResponse.json();
            setData(userData);
        });

        fetchUserData();
    }, []);
    return data;
}



export { useFetchUserData };
