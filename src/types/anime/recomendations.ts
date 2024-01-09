import { IAnimeImage } from './animeImage';

export interface IEntry {
    mal_id: number;
    images: {
        jpg: IAnimeImage;
    };
    title: string;
}

export interface IRecomApiResponse {
    data: {
        entry: IEntry;
    }[];
}
