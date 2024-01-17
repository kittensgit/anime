import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IUser } from 'types/user/user';

import Nav from './nav/Nav';

import styles from './Header.module.css';

interface HeaderProps {
    isAuth: boolean;
    photo: IUser['photo'];
}

const Header: FC<HeaderProps> = ({ isAuth, photo }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className="container">
                <div
                    className={`${styles.header__wrap} ${
                        isScrolled ? styles.scrolled : ''
                    }`}
                >
                    <Link to="">
                        <strong>Animos</strong>
                    </Link>
                    <Nav isAuth={isAuth} photo={photo} />
                </div>
            </div>
        </div>
    );
};

export default Header;
