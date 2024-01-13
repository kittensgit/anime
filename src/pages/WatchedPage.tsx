import { FC } from 'react';

import AnimeCards from '../componets/animeCards/AnimeCards';

import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeWatched } from '../redux/profileSlice';

const WatchedPage: FC = () => {
    const animelist = useAppSelector((state) => state.profile.watchedAnime);
    const dispatch = useAppDispatch();

    const handleDeleteAnime = (id: number) => {
        dispatch(removeWatched(id));
    };

    return (
        <div>
            <AnimeCards animelist={animelist} onDelete={handleDeleteAnime} />
        </div>
    );
};

export default WatchedPage;
