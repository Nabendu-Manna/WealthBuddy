// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GithubUser } from './types';

// Define a service using a base URL and expected endpoints
export const githubUserApi = createApi({
    reducerPath: 'githubUserApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
    endpoints: (builder) => ({
        getFollowersByName: builder.query<GithubUser[], string>({
            query: (name) => `${name}/followers`,
        }),
        getFollowingByName: builder.query<GithubUser[], string>({
            query: (name) => `${name}/following`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFollowersByNameQuery } = githubUserApi;
export const { useGetFollowingByNameQuery } = githubUserApi;

// https://api.github.com/users/Nabendu-Manna/followers
// https://api.github.com/users/Nabendu-Manna/following
