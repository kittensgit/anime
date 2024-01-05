import { FC } from 'react';

import Button from '../common/button/Button';

import { IAnime } from '../../types/anime/anime';
import { IAnimeImage } from '../../types/anime/animeImage';

import styles from './AnimeInfo.module.css';

interface AnimeInfoProps {
    title: IAnime['title'];
    score: IAnime['score'];
    img: IAnimeImage['image_url'];
}

const AnimeInfo: FC<AnimeInfoProps> = ({ title, img, score }) => {
    return (
        <div className="container">
            <div className={styles.info}>
                <img className={styles.img} src={img} alt="lol" />
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    {score && <p className={styles.score}>{score}</p>}
                    <div className={styles.buttons}>
                        <Button className="icon-btn watching-btn" to="/">
                            Watching
                        </Button>
                        <Button className="icon-btn to-watch-btn" to="/">
                            To Watch
                        </Button>
                        <Button className="icon-btn watched-btn" to="/">
                            Watched
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeInfo;
