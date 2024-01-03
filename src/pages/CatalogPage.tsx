import { FC } from 'react';

import CatalogContent from '../catalogContent/CatalogContent';
import { useGetAllAnimeQuery } from '../services/AnimeService';
import Loading from '../componets/common/loading/Loading';

const CatalogPage: FC = () => {
    const { data, isLoading, isError } = useGetAllAnimeQuery();

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <CatalogContent animelist={data.data} />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default CatalogPage;
