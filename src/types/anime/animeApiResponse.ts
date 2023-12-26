import { IAnime } from './anime';
import { IAnimePagination } from './animePagination';

export interface IAnimeApiResponse {
    data: IAnime[];
    pagination: IAnimePagination;
}
