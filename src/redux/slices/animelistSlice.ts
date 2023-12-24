import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    animelist: [],
};

const animelistSlice = createSlice({
    name: 'animelist',
    initialState,
    reducers: {},
});

export const animelistReducer = animelistSlice.reducer;
