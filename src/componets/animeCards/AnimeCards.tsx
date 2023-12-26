import { FC } from 'react';

import AnimeCard from '../animeCard/AnimeCard';

import styles from './AnimeCards.module.css';

interface AnimeCardsProps {
    title?: string;
}

const AnimeCards: FC<AnimeCardsProps> = ({ title }) => {
    return (
        <div>
            <div className="container">
                {title && <h5 className={styles.title}>{title}</h5>}
                <div className={styles.cards}>
                    <AnimeCard
                        title="Tokyo Revengres"
                        year={2021}
                        genre="Action"
                    />
                    <AnimeCard
                        title="Tokyo Revengres"
                        year={2021}
                        genre="Action"
                    />
                    <AnimeCard
                        title="Tokyo Revengres"
                        year={2021}
                        genre="Action"
                    />
                    <AnimeCard
                        title="Tokyo Revengres"
                        year={2021}
                        genre="Action"
                    />
                    <AnimeCard
                        title="Tokyo Revengres"
                        year={2021}
                        genre="Action"
                    />
                    <AnimeCard
                        title="Tokyo Revengres"
                        year={2021}
                        genre="Action"
                    />
                </div>
            </div>
        </div>
    );
};

export default AnimeCards;
