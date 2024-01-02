import { FC } from 'react';

import styles from './CatalogContent.module.css';
import CatalogFilter from './catalogFilter/CatalogFilter';

const CatalogContent: FC = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_top}>
                <h2>Catalog</h2>
                <div>
                    <select>
                        <option>Sort by</option>
                    </select>
                </div>
            </div>
            <div className={styles.catalog_wrap}>
                <CatalogFilter />
                <div>AnimeCard</div>
            </div>
        </div>
    );
};

export default CatalogContent;
