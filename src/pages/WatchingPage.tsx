import { FC } from 'react';

import AnimeCards from '../componets/animeCards/AnimeCards';

import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeWatching } from '../redux/profileSlice';

const WatchingPage: FC = () => {
    const animelist = useAppSelector((state) => state.profile.watchingAnime);
    const dispatch = useAppDispatch();

    const handleDeleteAnime = (id: number) => {
        dispatch(removeWatching(id));
    };

    return (
        <div>
            <AnimeCards animelist={animelist} onDelete={handleDeleteAnime} />
        </div>
    );
};

export default WatchingPage;
