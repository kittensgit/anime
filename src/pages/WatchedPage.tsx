import { FC } from 'react';

import { useAppSelector } from '../hooks/useAppSelector';
import AnimeCards from '../componets/animeCards/AnimeCards';

const WatchedPage: FC = () => {
    const animelist = useAppSelector((state) => state.profile.watchedAnime);

    return (
        <div>
            <AnimeCards animelist={animelist} />
        </div>
    );
};

export default WatchedPage;
