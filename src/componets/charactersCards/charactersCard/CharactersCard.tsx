import { FC } from 'react';

import { ICharacterImage } from '../../../types/characters/characterImage';
import { ICharacter } from '../../../types/characters/character';
import { ICharacterData } from '../../../types/characters/characterData';
import { IPerson } from '../../../types/characters/person';
import { IPersonImage } from '../../../types/characters/personImage';

import styles from './CharactersCard.module.css';

interface CharactersCardProps {
    characterImg: ICharacterImage['jpg'];
    characterName: ICharacter['name'];
    role: ICharacterData['role'];
    actorName: IPerson['name'];
    actorImg: IPersonImage['jpg'];
}

const CharactersCard: FC<CharactersCardProps> = ({
    actorImg,
    actorName,
    characterImg,
    characterName,
    role,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.front}>
                <img
                    className={styles.img}
                    src={characterImg.image_url}
                    alt={characterName}
                />
                <h5 className={styles.name}>{characterName}</h5>
                <p className={styles.caption}>{role}</p>
            </div>
            <div className={styles.back}>
                <img
                    className={styles.img}
                    src={actorImg?.image_url}
                    alt={actorName}
                />
                <h5 className={styles.name}>{actorName}</h5>
                <p className={styles.caption}>{role}</p>
            </div>
        </div>
    );
};

export default CharactersCard;
