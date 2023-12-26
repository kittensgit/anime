import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAnimeApiResponse } from '../types/anime/animeApiResponse';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
    endpoints: (builder) => ({
        getFiveAnime: builder.query<IAnimeApiResponse, string>({
            query: () => '/anime?order_by=popularity&limit=6',
        }),
    }),
});

export const { useGetFiveAnimeQuery } = animeApi;
