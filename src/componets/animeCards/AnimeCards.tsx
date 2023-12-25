import { FC } from 'react';

import AnimeCard from '../animeCard/AnimeCard';

import styles from './AnimeCards.module.css';

const AnimeCards: FC = () => {
    return (
        <div>
            <div className="container">
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
