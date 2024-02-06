import { FC } from 'react';

import { ITopCharacterData } from 'types/characters/topCharacters';

import TopCharacterCard from './topCharacterCard/TopCharacterCard';

import styles from './TopCharactersCards.module.css';

interface TopCharactersCardsProps {
    title: string;
    charactersList: ITopCharacterData[];
}

const TopCharactersCards: FC<TopCharactersCardsProps> = ({
    title,
    charactersList,
}) => {
    return (
        <div>
            <h5 className={styles.title}>{title}</h5>
            <div className={styles.cards}>
                {charactersList.map((character) => (
                    <TopCharacterCard
                        key={character.mal_id}
                        character={character}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCharactersCards;
