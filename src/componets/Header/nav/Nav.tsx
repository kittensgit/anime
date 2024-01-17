import { FC } from 'react';

import { IUser } from 'types/user/user';

import NavActiveLink from '../../common/navActiveLink/NavActiveLink';

import styles from './Nav.module.css';

interface NavProps {
    isAuth: boolean;
    photo: IUser['photo'];
}

const Nav: FC<NavProps> = ({ isAuth, photo }) => {
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
                    <NavActiveLink to="/profile">
                        {isAuth ? (
                            <img src={photo} className={styles.ava} alt="ava" />
                        ) : (
                            'Profile'
                        )}
                    </NavActiveLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
