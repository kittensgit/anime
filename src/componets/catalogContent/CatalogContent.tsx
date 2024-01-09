import { FC, useState } from 'react';

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
    handleChangeSort: (value: string) => void;
}

const CatalogContent: FC<CatalogContentProps> = ({
    animelist,
    genres,
    handleFilterClick,
    handleShowMoreClick,
    handleChangeSort,
}) => {
    const [selectedSort, setSelectedSort] = useState('');

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedSort(event.target.value);
        handleChangeSort(event.target.value);
    };

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
                    <select
                        className={styles.dropdowm}
                        value={selectedSort}
                        onChange={handleSelectChange}
                    >
                        <option value="">Sort by</option>
                        <option value="title">Title</option>
                        <option value="popularity">Popularity</option>
                    </select>

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
