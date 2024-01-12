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
            const animeAlreadyExists = state.watchedAnime.some(
                (anime) => anime.mal_id === action.payload.mal_id
            );
            if (!animeAlreadyExists) {
                state.watchedAnime = [...state.watchedAnime, action.payload];
            }
        },
        addWatching: (state, action: PayloadAction<IAnime>) => {
            const animeAlreadyExists = state.watchingAnime.some(
                (anime) => anime.mal_id === action.payload.mal_id
            );
            if (!animeAlreadyExists) {
                state.watchingAnime = [...state.watchingAnime, action.payload];
            }
        },
        addToWatch: (state, action: PayloadAction<IAnime>) => {
            const animeAlreadyExists = state.toWatchAnime.some(
                (anime) => anime.mal_id === action.payload.mal_id
            );
            if (!animeAlreadyExists) {
                state.toWatchAnime = [...state.toWatchAnime, action.payload];
            }
        },
    },
});

export const { addWatched, addToWatch, addWatching } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
