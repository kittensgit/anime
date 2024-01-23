import { FC } from 'react';

import { ITopCharacterData } from 'types/characters/topCharacters';

import styles from './TopCharacterCard.module.css';

interface TopCharacterCardProps {
    character: ITopCharacterData;
}

const TopCharacterCard: FC<TopCharacterCardProps> = ({ character }) => {
    return (
        <div className={styles.card}>
            <div className={styles.front}>
                <img
                    className={styles.img}
                    src={character.images.jpg.image_url}
                    alt={character.name}
                />
                <h5 className={styles.title}>{character.name}</h5>
            </div>
            <div className={styles.back}>
                <h5 className={styles.title}>{character.name}</h5>
                <p className={styles.caption}>{character.name_kanji}</p>
            </div>
        </div>
    );
};

export default TopCharacterCard;
