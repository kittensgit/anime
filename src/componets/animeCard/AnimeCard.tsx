import { FC } from 'react';

import Button from '../common/button/Button';

import { IAnimeTitle } from '../../types/anime/animeTitle';
import { IAnime } from '../../types/anime/anime';
import { IAnimeGenre } from '../../types/anime/animeGenre';
import { IAnimeImage } from '../../types/anime/animeImage';

import styles from './AnimeCard.module.css';

interface AnimeCardProps {
    title: IAnimeTitle['title'];
    year: IAnime['year'];
    genre: IAnimeGenre['name'];
    img: IAnimeImage['image_url'];
    id: IAnime['mal_id'];
}

const AnimeCard: FC<AnimeCardProps> = ({ genre, title, year, img, id }) => {
    return (
        <div className={styles.card}>
            <div className={styles.front}>
                <img className={styles.img} src={img} alt="img" />
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.caption}>
                    {year}, {genre}
                </p>
            </div>
            <div className={styles.back}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.caption}>
                    {year}, {genre}
                </p>
                <Button className={styles.btn} to={`catalog/${id}`}>
                    Learn more
                </Button>
            </div>
        </div>
    );
};

export default AnimeCard;
