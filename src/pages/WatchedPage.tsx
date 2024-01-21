import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';

const WatchedPage: FC = () => {
    const watchedAnimeList = useGetAnimeFromFirebase('watched');

    return (
        <div>
            <AnimeCards animelist={watchedAnimeList} />
        </div>
    );
};

export default WatchedPage;
