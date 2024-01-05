import { FC } from 'react';

import PreviewAnime from '../componets/previewAnime/PreviewAnime';
import AnimeCards from '../componets/animeCards/AnimeCards';
import Loading from '../componets/common/loading/Loading';

import { useGetFivePopularAnimeQuery } from '../services/AnimeService';

const HomePage: FC = () => {
    const { data, isLoading, isError } = useGetFivePopularAnimeQuery('');

    const hasDataAndNoError = data && !isError;

    return (
        <div>
            <PreviewAnime />
            <div className="container">
                {isLoading ? (
                    <Loading />
                ) : hasDataAndNoError ? (
                    <AnimeCards title="Top 5 anime" animelist={data.data} />
                ) : (
                    <p>An error occurred while fetching data</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
