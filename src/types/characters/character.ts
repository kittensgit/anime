import { ICharacterImage } from './characterImage';

export interface ICharacter {
    mal_id: number;
    images: ICharacterImage;
    name: string;
}
