import { FC } from 'react';

import ProfileContent from 'componets/profileContent/ProfileContent';

import { useAppSelector } from 'hooks/useAppSelector';

const ProfilePage: FC = () => {
    const countToWatch = useAppSelector((state) => state.profile.toWatchAnime);
    const countWatched = useAppSelector((state) => state.profile.watchedAnime);
    const countWatching = useAppSelector(
        (state) => state.profile.watchingAnime
    );

    return (
        <div className="container">
            <ProfileContent
                countToWatch={countToWatch.length}
                countWatched={countWatched.length}
                countWatching={countWatching.length}
            />
        </div>
    );
};

export default ProfilePage;
