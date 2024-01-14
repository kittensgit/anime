import { configureStore } from '@reduxjs/toolkit';

import { animeApi } from 'services/AnimeService';

import { profileReducer } from './profileSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        [animeApi.reducerPath]: animeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(animeApi.middleware),
});
