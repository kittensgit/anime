import { FC } from 'react';

import AnimeCards from 'componets/animeCards/AnimeCards';

import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';

const WatchingPage: FC = () => {
    const wacthingAnimeList = useGetAnimeFromFirebase('watching');

    return (
        <div>
            <AnimeCards animelist={wacthingAnimeList} />
        </div>
    );
};

export default WatchingPage;
