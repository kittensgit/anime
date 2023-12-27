import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AnimeInfoNav.module.css';

const AnimeInfoNav: FC = () => {
    return (
        <div className="container">
            <nav className={styles.nav}>
                <ul className={styles.navlist}>
                    <li className={styles.item_link}>
                        <Link to={'overview'}>Overview</Link>
                    </li>
                    <li className={styles.item_link}>
                        <Link to={'characters'}>Characters</Link>
                    </li>
                    <li className={styles.item_link}>
                        <Link to={'staff'}>Staff</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AnimeInfoNav;
