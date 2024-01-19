import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import { useAppDispatch } from 'hooks/useAppDispatch';
import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';

import { removeToWatch } from '../redux/profileSlice';

const ToWatchPage: FC = () => {
    const toWatchAnimeList = useGetAnimeFromFirebase('towatch');
    const dispatch = useAppDispatch();

    const handleDeleteAnime = (id: number) => {
        dispatch(removeToWatch(id));
    };

    return (
        <div>
            <AnimeCards
                animelist={toWatchAnimeList}
                onDelete={handleDeleteAnime}
            />
        </div>
    );
};

export default ToWatchPage;
