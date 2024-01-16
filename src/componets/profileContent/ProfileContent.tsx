import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import img from 'assets/spotic.jpg';

import ProfileNav from './ProfileNav/ProfileNav';

import styles from './ProfileContent.module.css';

interface ProfileContentProps {
    countWatched: number;
    countToWatch: number;
    countWatching: number;
    username: string;
    handleClick: () => void;
}

const ProfileContent: FC<ProfileContentProps> = ({
    countToWatch,
    countWatched,
    countWatching,
    username,
    handleClick,
}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <img className={styles.ava} src={img} alt="img" />
                <div>
                    <h2>{username}</h2>
                    <button className={styles.btn} onClick={handleClick}>
                        Log out
                    </button>
                </div>
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
