import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';

const ToWatchPage: FC = () => {
    const toWatchAnimeList = useGetAnimeFromFirebase('towatch');

    return (
        <div>
            <AnimeCards animelist={toWatchAnimeList} />
        </div>
    );
};

export default ToWatchPage;
