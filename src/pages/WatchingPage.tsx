import { FC } from 'react';

import { useAppSelector } from '../hooks/useAppSelector';

import AnimeCards from '../componets/animeCards/AnimeCards';

const WatchingPage: FC = () => {
    const animelist = useAppSelector((state) => state.profile.watchingAnime);

    return (
        <div>
            <AnimeCards animelist={animelist} />
        </div>
    );
};

export default WatchingPage;
