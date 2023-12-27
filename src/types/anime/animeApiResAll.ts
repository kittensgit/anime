import { IAnime } from './anime';
import { IAnimePagination } from './animePagination';

export interface IAnimeApiResAll {
    data: IAnime[];
    pagination: IAnimePagination;
}
