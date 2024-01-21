import { createSlice } from '@reduxjs/toolkit';

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
    },
});

export const { setUser, removeUser } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
