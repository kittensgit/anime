import { FC } from 'react';

import Button from '../common/button/Button';

import Video from './video/Video';

import styles from './PreviewAnime.module.css';

const PreviewAnime: FC = () => {
    return (
        <div className={styles.preview}>
            <div className="container">
                <div className={styles.preview__content}>
                    <h1 className={styles.preview__title}>Chainsaw Man</h1>
                    <p className={styles.preview__caption}>
                        Denji has a simple dream - to live a happy and peaceful
                        life, spending time with a girl
                    </p>
                    <Video />
                    <div className={styles.buttons}>
                        <Button to="/catalog/44511">Learn more</Button>
                        <button className={styles.icon_btn}>To Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewAnime;
