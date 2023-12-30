import { FC } from 'react';

import {
    ICharacter,
    ICharacterImage,
    ICharacterData,
    IPerson,
    IPersonImage,
    IVoiceActor,
} from '../../../types/characters/index';

import styles from './CharactersCard.module.css';

interface CharactersCardProps {
    characterImg: ICharacterImage['jpg'];
    characterName: ICharacter['name'];
    role: ICharacterData['role'];
    actorName: IPerson['name'];
    actorImg: IPersonImage['jpg'];
    language: IVoiceActor['language'];
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
