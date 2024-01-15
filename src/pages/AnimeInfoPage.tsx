import { FC } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import AnimeInfo from 'componets/animeInfo/AnimeInfo';
import Loading from 'componets/common/loading/Loading';
import AnimeInfoNav from 'componets/animeInfo/animeInfoNav/AnimeInfoNav';

import { useGetAnimeByIdQuery } from 'services/AnimeService';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAuth } from 'hooks/useAuth';

import { addToWatch, addWatched, addWatching } from '../redux/profileSlice';

const AnimeInfoPage: FC = () => {
    const { animeId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useGetAnimeByIdQuery(animeId!);

    const { isAuth } = useAuth();

    const hasDataAndNoError = data && !isError;

    const handleWatched = () => {
        if (hasDataAndNoError && isAuth) {
            dispatch(addWatched(data.data));
        } else if (!isAuth) {
            navigate('/login');
        }
    };
    const handleWatching = () => {
        if (hasDataAndNoError && isAuth) {
            dispatch(addWatching(data.data));
        } else if (!isAuth) {
            navigate('/login');
        }
    };
    const handleToWatch = () => {
        if (hasDataAndNoError && isAuth) {
            dispatch(addToWatch(data.data));
        } else if (!isAuth) {
            navigate('/login');
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
