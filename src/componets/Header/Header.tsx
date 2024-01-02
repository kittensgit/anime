import { Link } from 'react-router-dom';

import Nav from './nav/Nav';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__wrap}>
                    <Link to="">
                        <strong>Animos</strong>
                    </Link>
                    <Nav />
                </div>
            </div>
        </div>
    );
};

export default Header;
