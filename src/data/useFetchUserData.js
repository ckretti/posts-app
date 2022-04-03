import React from 'react';

import { AUTHORIZATION } from './api-constants';

const useFetchUserData = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        async function fetchUserData() {
            const userDataResponse = await fetch('https://api.react-learning.ru/users/me', {
                headers: { Authorization: AUTHORIZATION }
            });
            const userData = await userDataResponse.json();
            setData(userData);
        }

        fetchUserData();
    }, []);
    return data;
}



export { useFetchUserData };
