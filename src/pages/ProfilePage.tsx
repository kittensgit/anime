import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import ProfileContent from 'componets/profileContent/ProfileContent';

import useGetAnimeFromFirebase from 'hooks/useGetAnimeListFromFirebase';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAuth } from 'hooks/useAuth';

import { removeUser } from '../redux/profileSlice';

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch();

    const countWatched = useGetAnimeFromFirebase('watched').length;
    const countWatching = useGetAnimeFromFirebase('watching').length;
    const countToWatch = useGetAnimeFromFirebase('towatch').length;

    const { isAuth, username, photo } = useAuth();

    const handleLogOut = () => {
        dispatch(removeUser());
    };

    return (
        <div className="profile-wrap">
            <div className="container">
                {isAuth ? (
                    <ProfileContent
                        photo={photo}
                        username={username}
                        countToWatch={countToWatch}
                        countWatched={countWatched}
                        countWatching={countWatching}
                        handleClick={handleLogOut}
                    />
                ) : (
                    <Navigate replace to="/login" />
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
