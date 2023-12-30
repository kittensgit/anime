import { FC } from 'react';
import { useParams } from 'react-router-dom';

import OverviewContent from '../componets/overviewContent/OverviewContent';
import Loading from '../componets/common/loading/Loading';

import { useGetAnimeByIdQuery } from '../services/AnimeService';

const OverviewPage: FC = () => {
    const { animeId } = useParams();

    const { data, isError, isLoading } = useGetAnimeByIdQuery(animeId!);

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <OverviewContent anime={data.data} />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default OverviewPage;
