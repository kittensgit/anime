import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import img from '../../assets/spotic.jpg';

import ProfileNav from './ProfileNav/ProfileNav';

import styles from './ProfileContent.module.css';

const ProfileContent: FC = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <img className={styles.ava} src={img} alt="img" />
                <h2>Nika Posh</h2>
            </div>
            <div className={styles.profile_content}>
                <ProfileNav />
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileContent;
