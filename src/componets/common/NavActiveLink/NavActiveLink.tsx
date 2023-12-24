import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './NavActiveLink.module.css';

interface NavActiveLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavActiveLink: FC<NavActiveLinkProps> = ({ to, children }) => {
    const location = useLocation();

    return (
        <Link className={location.pathname === to ? styles.active : ''} to={to}>
            {children}
        </Link>
    );
};

export default NavActiveLink;
