import { FC, useEffect, useState } from 'react';

import CatalogContent from '../componets/catalogContent/CatalogContent';
import Loading from '../componets/common/loading/Loading';

import {
    useGetAllAnimeQuery,
    useGetAnimeGenresQuery,
} from '../services/AnimeService';

const CatalogPage: FC = () => {
    const [genresId, setGenresId] = useState<string>('0');

    const animelistData = useGetAllAnimeQuery(genresId);
    const genresData = useGetAnimeGenresQuery();

    const hasDataAndNoError =
        animelistData.data &&
        genresData.data &&
        !animelistData.isError &&
        !genresData.isError;

    const handleFilterClick = (genreId: string) => {
        setGenresId(genreId);
    };

    useEffect(() => {
        animelistData.refetch();
    }, [genresId]);

    return (
        <div className="container">
            {animelistData.isLoading || animelistData.isFetching ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <CatalogContent
                    animelist={animelistData.data.data}
                    genres={genresData.data.data}
                    handleFilterClick={handleFilterClick}
                />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default CatalogPage;
