import { FC } from 'react';

import PreviewAnime from '../componets/previewAnime/PreviewAnime';
import Header from '../componets/header/Header';
import AnimeCards from '../componets/animeCards/AnimeCards';

const HomePage: FC = () => {
    return (
        <div>
            <Header />
            <PreviewAnime />
            <AnimeCards title="Special for you" />
        </div>
    );
};

export default HomePage;
