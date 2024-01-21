import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAnimeApiResAll, IAnimeApiResOne } from 'types/anime';
import { ICharactersApiRes } from 'types/characters';
import { IStaffApiRes } from 'types/staff/staff';
import { IGenreApiRes } from 'types/genres/genres';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
    endpoints: (builder) => ({
        getAllAnime: builder.query<
            IAnimeApiResAll,
            { genres: string; page: number; rating: string }
        >({
            query: ({ genres, page, rating }) =>
                `/anime?genres=${genres}&page=${page}&rating=${rating}`,
        }),
        getFivePopularAnime: builder.query<IAnimeApiResAll, string>({
            query: () => 'top/anime?limit=5',
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
        getAnimeGenres: builder.query<IGenreApiRes, void>({
            query: () => '/genres/anime',
        }),
    }),
});

export const {
    useGetFivePopularAnimeQuery,
    useGetAnimeByIdQuery,
    useGetCharactersQuery,
    useGetStaffQuery,
    useGetAllAnimeQuery,
    useGetAnimeGenresQuery,
} = animeApi;
