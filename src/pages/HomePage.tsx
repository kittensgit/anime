import { FC } from 'react';

import Error from 'componets/common/error/Error';
import Loading from 'componets/common/loading/Loading';
import PreviewAnime from 'componets/previewAnime/PreviewAnime';
import AnimeCards from 'componets/animeCards/AnimeCards';

import { useGetFivePopularAnimeQuery } from 'services/AnimeService';

const HomePage: FC = () => {
    const { data, isLoading, isError } = useGetFivePopularAnimeQuery('');

    const hasDataAndNoError = data && !isError;

    return (
        <div className="home-wrap">
            <PreviewAnime />
            <div className="container">
                {isLoading ? (
                    <Loading />
                ) : hasDataAndNoError ? (
                    <AnimeCards title="Top 5 anime" animelist={data.data} />
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
};

export default HomePage;
