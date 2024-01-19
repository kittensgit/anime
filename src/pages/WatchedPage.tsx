import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import { useAppDispatch } from 'hooks/useAppDispatch';
import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';

import { removeWatched } from '../redux/profileSlice';

const WatchedPage: FC = () => {
    const dispatch = useAppDispatch();

    const watchedAnimeList = useGetAnimeFromFirebase('watched');

    const handleDeleteAnime = (id: number) => {
        dispatch(removeWatched(id));
    };

    return (
        <div>
            <AnimeCards
                animelist={watchedAnimeList}
                onDelete={handleDeleteAnime}
            />
        </div>
    );
};

export default WatchedPage;
