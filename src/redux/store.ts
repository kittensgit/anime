import { configureStore } from '@reduxjs/toolkit';

import { animeApi } from '../services/AnimeService';

import { animelistReducer } from './slices/animelistSlice';

export const store = configureStore({
    reducer: {
        animelist: animelistReducer,
        [animeApi.reducerPath]: animeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(animeApi.middleware),
});
