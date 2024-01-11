import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useGetAnimeByIdQuery } from '../services/AnimeService';

import AnimeInfo from '../componets/animeInfo/AnimeInfo';
import Loading from '../componets/common/loading/Loading';
import AnimeInfoNav from '../componets/animeInfo/animeInfoNav/AnimeInfoNav';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { addToWatch, addWatched, addWatching } from '../redux/profileSlice';

const AnimeInfoPage: FC = () => {
    const { animeId } = useParams();
    const dispatch = useAppDispatch();

    const { data, isLoading, isError } = useGetAnimeByIdQuery(animeId!);

    const hasDataAndNoError = data && !isError;

    const handleWatched = () => {
        if (hasDataAndNoError) {
            dispatch(addWatched(data.data));
        }
    };
    const handleWatching = () => {
        if (hasDataAndNoError) {
            dispatch(addWatching(data.data));
        }
    };
    const handleToWatch = () => {
        if (hasDataAndNoError) {
            dispatch(addToWatch(data.data));
        }
    };

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
