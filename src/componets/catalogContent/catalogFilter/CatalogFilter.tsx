import { FC } from 'react';

import Checkbox from '../../common/checkbox/Checkbox';

import { filter, seasonTypes } from '../../../data';
import { useCheckboxFilter } from '../../../hooks/useCheckboxFilter';
import { IGenre } from '../../../types/genres/genres';

import styles from './CatalogFilter.module.css';

interface CatalogFilterProps {
    genres: IGenre[];
}

const CatalogFilter: FC<CatalogFilterProps> = ({ genres }) => {
    const [selectedSeasons, handleSeasonChange] = useCheckboxFilter([]);
    const [selectedGenres, handleGenreChange] = useCheckboxFilter([]);

    return (
        <ul className={styles.filter_list}>
            {filter.map((filterTitle, index) => (
                <li key={index} className={styles.filter_item}>
                    <h4 className={styles.filter_title}>{filterTitle}</h4>
                    <ul className={styles.checkbox_list}>
                        {index === 0
                            ? seasonTypes.map((season) => (
                                  <Checkbox
                                      key={season}
                                      label={season}
                                      onChange={() =>
                                          handleSeasonChange(season)
                                      }
                                      checked={selectedSeasons.includes(season)}
                                  />
                              ))
                            : genres.map((genre) => (
                                  <Checkbox
                                      key={genre.mal_id}
                                      label={genre.name}
                                      onChange={() =>
                                          handleGenreChange(genre.name)
                                      }
                                      checked={selectedGenres.includes(
                                          genre.name
                                      )}
                                  />
                              ))}
                    </ul>
                </li>
            ))}
            <button className={styles.button}>Apply</button>
        </ul>
    );
};

export default CatalogFilter;
