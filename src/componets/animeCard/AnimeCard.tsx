import { FC } from 'react';

import styles from './AnimeCard.module.css';

interface AnimeCardProps {
    title: string;
    year: number;
    genre: string;
}

const AnimeCard: FC<AnimeCardProps> = ({ genre, title, year }) => {
    return (
        <div className={styles.card}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.caption}>
                {year}, {genre}
            </p>
        </div>
    );
};

export default AnimeCard;
