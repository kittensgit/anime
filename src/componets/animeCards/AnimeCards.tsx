import { FC } from 'react';

import AnimeCard from '../animeCard/AnimeCard';

import { IAnime } from '../../types/anime/anime';

import styles from './AnimeCards.module.css';

interface AnimeCardsProps {
    title?: string;
    animelist: IAnime[];
}

const AnimeCards: FC<AnimeCardsProps> = ({ title, animelist }) => {
    return (
        <div>
            <div className="container">
                {title && <h5 className={styles.title}>{title}</h5>}
                <div className={styles.cards}>
                    {animelist.map((anime) => (
                        <AnimeCard
                            key={anime.mal_id}
                            genre={anime.genres ? anime.genres[0].name : ''}
                            year={anime.year}
                            title={anime.title}
                            img={anime.images.jpg.image_url}
                            id={anime.mal_id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimeCards;
