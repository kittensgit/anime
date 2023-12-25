import { FC } from 'react';

import PreviewAnime from '../componets/previewAnime/PreviewAnime';
import Header from '../componets/header/Header';

const HomePage: FC = () => {
    return (
        <div>
            <Header />
            <PreviewAnime />
        </div>
    );
};

export default HomePage;
