import { FC } from 'react';

import Button from '../common/button/Button';

import img from '../../assets/img1.jpg';

import styles from './AnimeCard.module.css';

interface AnimeCardProps {
    title: string;
    year: number;
    genre: string;
}

const AnimeCard: FC<AnimeCardProps> = ({ genre, title, year }) => {
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
                <Button className={styles.btn} to="catalog/1">
                    Learn more
                </Button>
            </div>
        </div>
    );
};

export default AnimeCard;
