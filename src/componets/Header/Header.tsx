import Nav from '../nav/Nav';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__wrap}>
                    <strong>Animos</strong>
                    <Nav />
                </div>
            </div>
        </div>
    );
};

export default Header;
