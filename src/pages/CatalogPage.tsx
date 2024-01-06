import { FC, useEffect, useState } from 'react';

import CatalogContent from '../componets/catalogContent/CatalogContent';
import Loading from '../componets/common/loading/Loading';

import {
    useGetAllAnimeQuery,
    useGetAnimeGenresQuery,
} from '../services/AnimeService';

import { IAnime } from '../types/anime';

const CatalogPage: FC = () => {
    const [genresId, setGenresId] = useState<string>('0');
    const [rating, setRating] = useState<string>('G');
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [allAnime, setAllAnime] = useState<IAnime[]>([]);

    const animelistData = useGetAllAnimeQuery({
        genres: genresId,
        page: currentPage,
        rating,
    });

    const genresData = useGetAnimeGenresQuery();

    const hasDataAndNoError =
        animelistData.data &&
        genresData.data &&
        !animelistData.isError &&
        !genresData.isError;

    const handleFilterClick = (genreId: string, rating: string) => {
        setGenresId(genreId);
        setCurrentPage(1);
        setAllAnime([]);
        setRating(rating ? rating : 'G');
    };

    const handleShowMoreClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        if (animelistData.data && animelistData.data.data) {
            setAllAnime((prevAnime) => [
                ...prevAnime,
                ...animelistData.data!.data,
            ]);
        }
    }, [animelistData.data]);

    useEffect(() => {
        animelistData.refetch();
    }, [genresId, currentPage, rating]);

    return (
        <div className="container">
            {animelistData.isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <CatalogContent
                    animelist={allAnime}
                    genres={genresData.data.data}
                    handleFilterClick={handleFilterClick}
                    handleShowMoreClick={handleShowMoreClick}
                />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default CatalogPage;
