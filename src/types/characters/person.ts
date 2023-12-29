import { IPersonImage } from './personImage';

export interface IPerson {
    mal_id: number;
    images: IPersonImage;
    name: string;
}
