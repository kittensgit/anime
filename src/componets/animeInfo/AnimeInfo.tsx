import { FC } from 'react';

import { IAnime } from '../../types/anime/anime';

import styles from './AnimeInfo.module.css';

interface AnimeInfoProps {
    anime: IAnime;
    handleWatched: () => void;
    handleWatching: () => void;
    handleToWatch: () => void;
}

const AnimeInfo: FC<AnimeInfoProps> = ({
    anime,
    handleWatching,
    handleToWatch,
    handleWatched,
}) => {
    return (
        <div className="container">
            <div className={styles.info}>
                <img
                    className={styles.img}
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                />
                <div>
                    <h2 className={styles.title}>{anime.title}</h2>
                    {anime.score && (
                        <p className={styles.score}>{anime.score}</p>
                    )}
                    <div className={styles.buttons}>
                        <button
                            className={styles.icon_btn}
                            onClick={handleWatching}
                        >
                            Watching
                        </button>
                        <button
                            className={styles.icon_btn}
                            onClick={handleWatched}
                        >
                            Watched
                        </button>
                        <button
                            className={styles.icon_btn}
                            onClick={handleToWatch}
                        >
                            To Watch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeInfo;
