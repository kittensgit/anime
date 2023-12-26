import { FC } from 'react';

import PreviewAnime from '../componets/previewAnime/PreviewAnime';
import Header from '../componets/header/Header';
import AnimeCards from '../componets/animeCards/AnimeCards';
import Loading from '../componets/common/loading/Loading';

import { useGetFiveAnimeQuery } from '../services/AnimeService';

const HomePage: FC = () => {
    const { data, isLoading, isError } = useGetFiveAnimeQuery('');

    const hasDataAndNoError = data && !isError;

    return (
        <div>
            <Header />
            <PreviewAnime />
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <AnimeCards title="Special for you" animelist={data.data} />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default HomePage;
