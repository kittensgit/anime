import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAnime } from 'types/anime';
import { IUser } from 'types/user/user';

interface IInitialState {
    watchedAnime: IAnime[];
    watchingAnime: IAnime[];
    toWatchAnime: IAnime[];
    user: IUser;
}

const initialState: IInitialState = {
    watchedAnime: [],
    watchingAnime: [],
    toWatchAnime: [],
    user: {
        email: '',
        id: '',
        password: '',
        photo: '',
        token: '',
        username: '',
    },
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.email = action.payload.email;
            state.user.id = action.payload.id;
            state.user.token = action.payload.token;
            state.user.username = action.payload.username;
            state.user.photo = action.payload.photo;
        },
        removeUser: (state) => {
            state.user.email = '';
            state.user.id = '';
            state.user.token = '';
            state.user.username = '';
            state.user.password = '';
            state.user.photo = '';
        },
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
    setUser,
    removeUser,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
