import NavActiveLink from '../../common/navActiveLink/NavActiveLink';

import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <NavActiveLink to="/">Home</NavActiveLink>
                </li>
                <li className={styles.nav__item}>
                    <NavActiveLink to="/catalog">Catalog</NavActiveLink>
                </li>
                <li className={styles.nav__item}>
                    <NavActiveLink to="/profile">Profile</NavActiveLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
