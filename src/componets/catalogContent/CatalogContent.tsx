import { FC } from 'react';

import AnimeCards from '../animeCards/AnimeCards';

import { IAnime } from '../../types/anime';
import { IGenre } from '../../types/genres/genres';

import CatalogFilter from './catalogFilter/CatalogFilter';

import styles from './CatalogContent.module.css';

interface CatalogContentProps {
    animelist: IAnime[];
    genres: IGenre[];
    handleFilterClick: (genreId: string, rating: string) => void;
    handleShowMoreClick: () => void;
}

const CatalogContent: FC<CatalogContentProps> = ({
    animelist,
    genres,
    handleFilterClick,
    handleShowMoreClick,
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
                <div className={styles.catalog_cards}>
                    <AnimeCards animelist={animelist} />
                    <button
                        onClick={handleShowMoreClick}
                        className={styles.catalog_btn}
                    >
                        Show more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogContent;
