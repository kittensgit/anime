import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import { removeToWatch } from '../redux/profileSlice';

const ToWatchPage: FC = () => {
    const animelist = useAppSelector((state) => state.profile.toWatchAnime);
    const dispatch = useAppDispatch();

    const handleDeleteAnime = (id: number) => {
        dispatch(removeToWatch(id));
    };

    return (
        <div>
            <AnimeCards animelist={animelist} onDelete={handleDeleteAnime} />
        </div>
    );
};

export default ToWatchPage;
