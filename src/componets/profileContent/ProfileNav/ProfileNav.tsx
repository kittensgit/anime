import { FC } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={''}>Watched {countWatched}</Link>
                </li>
                <li className={styles.item_link}>
                    <Link to={'watching'}>Watching {countWatching}</Link>
                </li>
                <li className={styles.item_link}>
                    <Link to={'to-watch'}>To Watch {countToWatch}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ProfileNav;
