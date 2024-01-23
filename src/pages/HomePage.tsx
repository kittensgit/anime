import { FC } from 'react';

import Error from 'componets/common/error/Error';
import Loading from 'componets/common/loading/Loading';
import PreviewAnime from 'componets/previewAnime/PreviewAnime';
import AnimeCards from 'componets/animeCards/AnimeCards';

import {
    useGetFivePopularAnimeQuery,
    useGetFivePopularCharactersQuery,
} from 'services/AnimeService';
import TopCharactersCards from 'componets/topCharactersCards/TopCharactersCards';

const HomePage: FC = () => {
    const popularAnime = useGetFivePopularAnimeQuery('');
    const popularCharacters = useGetFivePopularCharactersQuery('');

    const hasDataAndNoError =
        popularAnime.data &&
        popularCharacters.data &&
        !popularAnime.isError &&
        !popularCharacters.isError;

    return (
        <div className="home-wrap">
            <PreviewAnime />
            <div className="container">
                {popularAnime.isLoading && popularCharacters.isLoading ? (
                    <Loading />
                ) : hasDataAndNoError ? (
                    <>
                        <AnimeCards
                            title="Top 5 anime"
                            animelist={popularAnime.data.data}
                        />
                        <TopCharactersCards
                            title="Top 5 characters"
                            charactersList={popularCharacters.data.data}
                        />
                    </>
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
};

export default HomePage;
