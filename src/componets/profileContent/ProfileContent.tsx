import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import img from 'assets/spotic.jpg';

import ProfileNav from './ProfileNav/ProfileNav';

import styles from './ProfileContent.module.css';

interface ProfileContentProps {
    countWatched: number;
    countToWatch: number;
    countWatching: number;
    email: string;
    handleClick: () => void;
}

const ProfileContent: FC<ProfileContentProps> = ({
    countToWatch,
    countWatched,
    countWatching,
    email,
    handleClick,
}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <img className={styles.ava} src={img} alt="img" />
                <h2>{email}</h2>
                <button onClick={handleClick}>log out</button>
            </div>
            <div className={styles.profile_content}>
                <ProfileNav
                    countToWatch={countToWatch}
                    countWatched={countWatched}
                    countWatching={countWatching}
                />
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileContent;
