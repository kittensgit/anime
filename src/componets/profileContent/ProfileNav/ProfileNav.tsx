import { FC } from 'react';
import { Link } from 'react-router-dom';

import watchingImg from 'assets/eye.png';
import watchedImg from 'assets/check.png';
import towatchImg from 'assets/bookmark.png';

import styles from './ProfileNav.module.css';

interface ProfileNavProps {
    countWatched: number;
    countToWatch: number;
    countWatching: number;
}

const ProfileNav: FC<ProfileNavProps> = ({
    countToWatch,
    countWatched,
    countWatching,
}) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navlist}>
                <li className={styles.item_link}>
                    <img src={watchedImg} alt="watched" />
                    <Link to={''}>Watched {countWatched}</Link>
                </li>
                <li className={styles.item_link}>
                    <img src={watchingImg} alt="watching" />
                    <Link to={'watching'}>Watching {countWatching}</Link>
                </li>
                <li className={styles.item_link}>
                    <img src={towatchImg} alt="to watch" />
                    <Link to={'to-watch'}>To Watch {countToWatch}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ProfileNav;
