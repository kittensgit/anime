import { FC } from 'react';

import AnimeCards from '../animeCards/AnimeCards';

import { IAnime } from '../../types/anime';
import { IGenre } from '../../types/genres/genres';

import CatalogFilter from './catalogFilter/CatalogFilter';

import styles from './CatalogContent.module.css';

interface CatalogContentProps {
    animelist: IAnime[];
    genres: IGenre[];
    handleFilterClick: (genreId: string) => void;
}

const CatalogContent: FC<CatalogContentProps> = ({
    animelist,
    genres,
    handleFilterClick,
}) => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_top}>
                <h2>Catalog</h2>
            </div>
            <div className={styles.catalog_wrap}>
                <CatalogFilter
                    genres={genres}
                    handleFilterClick={handleFilterClick}
                />
                <AnimeCards animelist={animelist} />
            </div>
        </div>
    );
};

export default CatalogContent;
