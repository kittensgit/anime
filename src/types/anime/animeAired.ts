export interface IAnimeAired {
    from: string;
    to: string;
    prop?: {
        from: { day: number; month: number; year: number };
        to: { day: number; month: number; year: number };
        string: string;
    };
}
