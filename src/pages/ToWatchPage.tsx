import { FC } from 'react';

import { useAppSelector } from '../hooks/useAppSelector';

import AnimeCards from '../componets/animeCards/AnimeCards';

const ToWatchPage: FC = () => {
    const animelist = useAppSelector((state) => state.profile.toWatchAnime);

    return (
        <div>
            <AnimeCards animelist={animelist} />
        </div>
    );
};

export default ToWatchPage;
