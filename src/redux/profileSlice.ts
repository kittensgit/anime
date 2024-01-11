import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAnime } from '../types/anime';

interface IInitialState {
    watchedAnime: IAnime[];
    watchingAnime: IAnime[];
    toWatchAnime: IAnime[];
}

const initialState: IInitialState = {
    watchedAnime: [],
    watchingAnime: [],
    toWatchAnime: [],
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addWatched: (state, action: PayloadAction<IAnime>) => {
            state.watchedAnime = [...state.watchedAnime, action.payload];
        },
        addWatching: (state, action: PayloadAction<IAnime>) => {
            state.watchingAnime = [...state.watchingAnime, action.payload];
        },
        addToWatch: (state, action: PayloadAction<IAnime>) => {
            state.toWatchAnime = [...state.toWatchAnime, action.payload];
        },
    },
});

export const { addWatched, addToWatch, addWatching } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
