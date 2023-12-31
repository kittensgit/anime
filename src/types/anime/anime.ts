import { IAnimeAired } from './animeAired';
import { IAnimeGenre } from './animeGenre';
import { IAnimeImage } from './animeImage';
import { IAnimeStudio } from './animeStudio';
import { IAnimeTitle } from './animeTitle';
import { IAnimeTrailer } from './animeTrailer';

export interface IAnime {
    mal_id: number;
    title: string;
    images: {
        jpg: IAnimeImage;
    };
    trailer?: IAnimeTrailer;
    titles?: IAnimeTitle[];
    title_japanese?: string;
    type?: string;
    source?: string;
    episodes?: number;
    status?: string;
    aired?: IAnimeAired;
    duration?: string;
    rating?: string;
    score?: number;
    scored_by?: number;
    popularity?: number;
    synopsis?: string;
    season?: string;
    year?: number;
    studios?: IAnimeStudio[];
    genres?: IAnimeGenre[];
}
