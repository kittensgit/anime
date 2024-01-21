import { FC } from 'react';
import { useParams } from 'react-router-dom';

import OverviewContent from 'componets/overviewContent/OverviewContent';
import Loading from 'componets/common/loading/Loading';
import Error from 'componets/common/error/Error';

import { useGetAnimeByIdQuery } from 'services/AnimeService';

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
                <Error />
            )}
        </div>
    );
};

export default OverviewPage;
