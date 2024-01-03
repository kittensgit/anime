import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../common/button/Button';

import {
    IAnime,
    IAnimeTitle,
    IAnimeGenre,
    IAnimeImage,
} from '../../../types/anime/index';

import styles from './AnimeCard.module.css';

interface AnimeCardProps {
    title: IAnimeTitle['title'];
    year: IAnime['year'];
    genre: IAnimeGenre['name'];
    img: IAnimeImage['image_url'];
    id: IAnime['mal_id'];
}

const AnimeCard: FC<AnimeCardProps> = ({ genre, title, year, img, id }) => {
    const location = useLocation();

    return (
        <div className={styles.card}>
            <div className={styles.front}>
                <img className={styles.img} src={img} alt={title} />
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.caption}>
                    {year ? year : '-'}, {genre}
                </p>
            </div>
            <div className={styles.back}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.caption}>
                    {year ? year : '-'}, {genre}
                </p>
                <Button
                    className={styles.btn}
                    to={
                        location.pathname.includes('/catalog')
                            ? `${id}`
                            : `/catalog/${id}`
                    }
                >
                    Learn more
                </Button>
            </div>
        </div>
    );
};

export default AnimeCard;
