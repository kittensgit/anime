import { FC } from 'react';

import video from 'assets/chainsaw.mp4';

import styles from './Video.module.css';

const Video: FC = () => {
    return (
        <video className={styles.video} autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
        </video>
    );
};

export default Video;
