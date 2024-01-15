import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import ProfileContent from 'componets/profileContent/ProfileContent';

import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAuth } from 'hooks/useAuth';

import { removeUser } from '../redux/profileSlice';

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch();

    const countToWatch = useAppSelector((state) => state.profile.toWatchAnime);
    const countWatched = useAppSelector((state) => state.profile.watchedAnime);
    const countWatching = useAppSelector(
        (state) => state.profile.watchingAnime
    );

    const { isAuth, email } = useAuth();

    const handleLogOut = () => {
        dispatch(removeUser());
    };

    return (
        <div className="container">
            {isAuth ? (
                <ProfileContent
                    email={email}
                    countToWatch={countToWatch.length}
                    countWatched={countWatched.length}
                    countWatching={countWatching.length}
                    handleClick={handleLogOut}
                />
            ) : (
                <Navigate replace to="/login" />
            )}
        </div>
    );
};

export default ProfilePage;
