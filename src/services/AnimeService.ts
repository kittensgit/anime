import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAnimeApiResAll } from '../types/anime/animeApiResAll';
import { IAnimeApiResOne } from '../types/anime/animeApiResOne';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
    endpoints: (builder) => ({
        getFiveAnime: builder.query<IAnimeApiResAll, string>({
            query: () => '/anime?order_by=popularity&limit=6',
        }),
        getAnimeById: builder.query<IAnimeApiResOne, string>({
            query: (animeId) => `/anime/${animeId}`,
        }),
    }),
});

export const { useGetFiveAnimeQuery, useGetAnimeByIdQuery } = animeApi;
