import { FC } from 'react';

import { ICharacterData } from '../../types/characters/index';

import CharactersCard from './charactersCard/CharactersCard';

import styles from './CharactersCards.module.css';

interface CharactersCardsProps {
    characterList: ICharacterData[];
}

const CharactersCards: FC<CharactersCardsProps> = ({ characterList }) => {
    return (
        <div className="container">
            <h3>Anime Characters</h3>
            <div className={styles.cards}>
                {characterList.map((character) => (
                    <CharactersCard
                        key={character.character.mal_id}
                        actorImg={
                            character.voice_actors[0]?.person?.images?.jpg
                        }
                        characterImg={character.character.images.jpg}
                        actorName={character.voice_actors[0]?.person?.name}
                        characterName={character.character.name}
                        role={character.role}
                        language={character.voice_actors[0].language}
                    />
                ))}
            </div>
        </div>
    );
};

export default CharactersCards;
