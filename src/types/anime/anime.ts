import { IAnimeAired } from './animeAired';
import { IAnimeGenre } from './animeGenre';
import { IAnimeImage } from './animeImage';
import { IAnimeLicensors } from './animeLicensors';
import { IAnimeProducer } from './animeProducer';
import { IAnimeStudio } from './animeStudio';
import { IAnimeTitle } from './animeTitle';
import { IAnimeTrailer } from './animeTrailer';

export interface IAnime {
    mal_id: number;
    title: string;
    url?: string;
    images: {
        jpg: IAnimeImage;
        webp?: IAnimeImage;
    };
    trailer?: IAnimeTrailer;
    titles?: IAnimeTitle[];
    title_english?: string;
    title_japanese?: string;
    source?: string;
    episodes?: number;
    status?: string;
    airing?: boolean;
    aired?: IAnimeAired;
    duration?: string;
    rating?: string;
    score?: number;
    scored_by?: number;
    popularity?: number;
    synopsis?: string;
    background?: string;
    season?: string;
    year: number;
    producers?: IAnimeProducer[];
    licensors?: IAnimeLicensors[];
    studios?: IAnimeStudio[];
    genres?: IAnimeGenre[];
}
