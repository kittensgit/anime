import { FC } from 'react';

import AnimeCards from '../componets/animeCards/AnimeCards';

import { IAnime } from '../types/anime';
import { IGenre } from '../types/genres/genres';

import CatalogFilter from './catalogFilter/CatalogFilter';

import styles from './CatalogContent.module.css';

interface CatalogContentProps {
    animelist: IAnime[];
    genres: IGenre[];
}

const CatalogContent: FC<CatalogContentProps> = ({ animelist, genres }) => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_top}>
                <h2>Catalog</h2>
            </div>
            <div className={styles.catalog_wrap}>
                <CatalogFilter genres={genres} />
                <AnimeCards animelist={animelist} />
            </div>
        </div>
    );
};

export default CatalogContent;
