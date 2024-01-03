import { FC } from 'react';

import CatalogContent from '../componets/catalogContent/CatalogContent';
import Loading from '../componets/common/loading/Loading';

import {
    useGetAllAnimeQuery,
    useGetAnimeGenresQuery,
} from '../services/AnimeService';

const CatalogPage: FC = () => {
    const animelistData = useGetAllAnimeQuery();
    const genresData = useGetAnimeGenresQuery();

    const hasDataAndNoError =
        animelistData.data &&
        genresData.data &&
        !animelistData.isError &&
        !genresData.isError;

    return (
        <div className="container">
            {animelistData.isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <CatalogContent
                    animelist={animelistData.data.data}
                    genres={genresData.data.data}
                />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default CatalogPage;
