import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAnime } from 'types/anime';

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
        removeWatched: (state, action: PayloadAction<number>) => {
            state.watchedAnime = state.watchedAnime.filter(
                (anime) => anime.mal_id !== action.payload
            );
        },
        addWatching: (state, action: PayloadAction<IAnime>) => {
            const animeAlreadyExists = state.watchingAnime.some(
                (anime) => anime.mal_id === action.payload.mal_id
            );
            if (!animeAlreadyExists) {
                state.watchingAnime = [...state.watchingAnime, action.payload];
            }
        },
        removeWatching: (state, action: PayloadAction<number>) => {
            state.watchingAnime = state.watchingAnime.filter(
                (anime) => anime.mal_id !== action.payload
            );
        },
        addToWatch: (state, action: PayloadAction<IAnime>) => {
            const animeAlreadyExists = state.toWatchAnime.some(
                (anime) => anime.mal_id === action.payload.mal_id
            );
            if (!animeAlreadyExists) {
                state.toWatchAnime = [...state.toWatchAnime, action.payload];
            }
        },
        removeToWatch: (state, action: PayloadAction<number>) => {
            state.toWatchAnime = state.toWatchAnime.filter(
                (anime) => anime.mal_id !== action.payload
            );
        },
    },
});

export const {
    addWatched,
    addToWatch,
    addWatching,
    removeWatched,
    removeToWatch,
    removeWatching,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
