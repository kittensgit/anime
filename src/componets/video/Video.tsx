import { FC, useEffect, useRef } from 'react';

import video from '../../assets/chainsaw.mp4';

import styles from './Video.module.css';

const Video: FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultPlaybackRate = 0.6;
            videoRef.current.play();
        }
    }, []);

    return (
        <video ref={videoRef} className={styles.video} autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
    );
};

export default Video;
