import { FC } from 'react';

import styles from './CatalogFilter.module.css';

const CatalogFilter: FC = () => {
    return (
        <ul className={styles.filter_list}>
            <li className={styles.filter_item}>
                <h4 className={styles.filter_title}>Season</h4>
                <ul className={styles.checkbox_list}>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Winter</label>
                    </li>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Spring</label>
                    </li>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Summer</label>
                    </li>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Fall</label>
                    </li>
                </ul>
            </li>
            <li className={styles.filter_item}>
                <h4 className={styles.filter_title}>Genres</h4>
                <ul className={styles.checkbox_list}>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Action</label>
                    </li>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Comedy</label>
                    </li>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Drama</label>
                    </li>
                    <li className={styles.checkbox_item}>
                        <input type="checkbox" />
                        <label>Adventure</label>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default CatalogFilter;
