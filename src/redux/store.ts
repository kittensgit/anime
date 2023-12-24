import { configureStore } from '@reduxjs/toolkit';

import { animelistReducer } from './slices/animelistSlice';

export const store = configureStore({
    reducer: {
        animelist: animelistReducer,
    },
});
