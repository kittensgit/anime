import { ICharacterImage } from './characterImage';

export interface ITopCharacterData {
    mal_id: number;
    url: string;
    images: ICharacterImage;
    name: string;
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
}

export interface ITopCharactersApiData {
    data: ITopCharacterData[];
}
