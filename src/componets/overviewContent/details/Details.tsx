import { FC } from 'react';

import { IAnime } from '../../../types/anime';

import { normalizeDate } from '../../../helpers/normalizeDate';

import styles from './Details.module.css';

interface DetailsProps {
    anime: IAnime;
}

const Details: FC<DetailsProps> = ({ anime }) => {
    return (
        <div>
            <h2 className={styles.title}>Details</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.item_title}>Japanese Title</span>
                    <span>{anime.title_japanese}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Type</span>
                    <span>{anime.type}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Episodes</span>
                    <span>{anime.episodes}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Genres</span>
                    <div>
                        {anime.genres
                            ? anime.genres.map((genre, index) => (
                                  <span key={index}>{genre.name} </span>
                              ))
                            : ''}
                    </div>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Aired</span>
                    <span>
                        {anime.aired ? normalizeDate(anime.aired.from) : ''} -
                        {anime.aired ? normalizeDate(anime.aired?.to) : ''}
                    </span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Status</span>
                    <span>{anime.status}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Season</span>
                    <span>
                        {anime.season} {anime.year}
                    </span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Studios</span>
                    <div>
                        {anime.studios
                            ? anime.studios.map((studio, index) => (
                                  <span key={index}>{studio.name} </span>
                              ))
                            : ''}
                    </div>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Source</span>
                    <span>{anime.source}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Rating</span>
                    <span>{anime.rating}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_title}>Duration</span>
                    <span>{anime.duration}</span>
                </li>
            </ul>
        </div>
    );
};

export default Details;
