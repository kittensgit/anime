import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProfileNav.module.css';

const ProfileNav: FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navlist}>
                <li className={styles.item_link}>
                    <Link to={''}>Watched</Link>
                </li>
                <li className={styles.item_link}>
                    <Link to={'watching'}>Watching</Link>
                </li>
                <li className={styles.item_link}>
                    <Link to={'to-watch'}>To Watch</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ProfileNav;
