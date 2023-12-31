import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAnimeApiResAll, IAnimeApiResOne } from '../types/anime';
import { ICharactersApiRes } from '../types/characters';
import { IStaffApiRes } from '../types/staff/staff';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
    endpoints: (builder) => ({
        getFivePopularAnime: builder.query<IAnimeApiResAll, string>({
            query: () => '/anime?order_by=popularity&limit=6',
        }),
        getAnimeById: builder.query<IAnimeApiResOne, string>({
            query: (animeId) => `/anime/${animeId}`,
        }),
        getCharacters: builder.query<ICharactersApiRes, string>({
            query: (animeId) => `/anime/${animeId}/characters`,
        }),
        getStaff: builder.query<IStaffApiRes, string>({
            query: (animeId) => `/anime/${animeId}/staff`,
        }),
    }),
});

export const {
    useGetFivePopularAnimeQuery,
    useGetAnimeByIdQuery,
    useGetCharactersQuery,
    useGetStaffQuery,
} = animeApi;
