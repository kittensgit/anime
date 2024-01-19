import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import AnimeInfo from 'componets/animeInfo/AnimeInfo';
import Loading from 'componets/common/loading/Loading';
import AnimeInfoNav from 'componets/animeInfo/animeInfoNav/AnimeInfoNav';

import { useGetAnimeByIdQuery } from 'services/AnimeService';
import { useFirebaseAnimelist } from 'hooks/useFirebaseAnimeList';

const AnimeInfoPage: FC = () => {
    const { animeId } = useParams();

    const { data, isLoading, isError } = useGetAnimeByIdQuery(animeId!);
    const hasDataAndNoError = data && !isError;

    const handleWatched = useFirebaseAnimelist('watched', data?.data);
    const handleWatching = useFirebaseAnimelist('watching', data?.data);
    const handleToWatch = useFirebaseAnimelist('towatch', data?.data);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <AnimeInfo
                    anime={data.data}
                    handleWatched={handleWatched}
                    handleWatching={handleWatching}
                    handleToWatch={handleToWatch}
                />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
            <AnimeInfoNav />
            <Outlet />
        </div>
    );
};

export default AnimeInfoPage;
