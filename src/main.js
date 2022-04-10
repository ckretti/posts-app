import React from 'react';

import PostList from './postList';

import { useFetchUserData } from './data/useFetchUserData';
import { UserContext } from './userContext/userContext';

export default function Main() {
    const userData = useFetchUserData();

    return (
        <UserContext.Provider value={userData}>
            <PostList />
        </UserContext.Provider>
    );
}
