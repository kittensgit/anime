export interface IGenre {
    mal_id: number;
    name: string;
}

export interface IGenreApiRes {
    data: IGenre[];
}
