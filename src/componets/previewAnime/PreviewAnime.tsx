import { FC } from 'react';

import Video from '../video/Video';
import Button from '../common/button/Button';
import AnimeCards from '../animeCards/AnimeCards';

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
                        <Button to="/catalog/1">Learn more</Button>
                        <Button className={styles.watchBtn} to="/catalog/2">
                            To Watch
                        </Button>
                    </div>
                    <AnimeCards />
                </div>
            </div>
        </div>
    );
};

export default PreviewAnime;
