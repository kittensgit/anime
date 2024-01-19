import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import { useAppDispatch } from 'hooks/useAppDispatch';
import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';

import { removeWatching } from '../redux/profileSlice';

const WatchingPage: FC = () => {
    const wacthingAnimeList = useGetAnimeFromFirebase('watching');
    const dispatch = useAppDispatch();

    const handleDeleteAnime = (id: number) => {
        dispatch(removeWatching(id));
    };

    return (
        <div>
            <AnimeCards
                animelist={wacthingAnimeList}
                onDelete={handleDeleteAnime}
            />
        </div>
    );
};

export default WatchingPage;
