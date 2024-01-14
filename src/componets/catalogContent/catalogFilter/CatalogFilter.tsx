import { FC, useState } from 'react';

import { filter, ratings } from 'data';
import { useCheckboxFilter } from 'hooks/useCheckboxFilter';
import { IGenre } from 'types/genres/genres';

import Checkbox from '../../common/checkbox/Checkbox';

import styles from './CatalogFilter.module.css';

interface CatalogFilterProps {
    genres: IGenre[];
    handleFilterClick: (genreId: string, rating: string) => void;
}

const CatalogFilter: FC<CatalogFilterProps> = ({
    genres,
    handleFilterClick,
}) => {
    const [selectedGenres, handleGenreChange] = useCheckboxFilter([]);
    const [selectedRatings, handleRatingChange] = useCheckboxFilter([]);
    const [showAllGenres, setShowAllGenres] = useState(false);

    const handleViewAllClick = () => {
        setShowAllGenres(true);
    };

    const displayedGenres = showAllGenres ? genres : genres.slice(0, 5);

    return (
        <ul className={styles.filter_list}>
            {filter.map((filterTitle, index) => (
                <li key={index} className={styles.filter_item}>
                    <h4 className={styles.filter_title}>{filterTitle}</h4>
                    <ul className={styles.checkbox_list}>
                        {index === 0 ? (
                            <>
                                {displayedGenres.map((genre) => (
                                    <Checkbox
                                        key={genre.mal_id}
                                        label={genre.name}
                                        onChange={() =>
                                            handleGenreChange(genre.mal_id)
                                        }
                                        checked={selectedGenres.includes(
                                            genre.mal_id
                                        )}
                                    />
                                ))}
                                {!showAllGenres && (
                                    <p
                                        className={styles.caption}
                                        onClick={handleViewAllClick}
                                    >
                                        View All
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                {ratings.map((rating, index) => (
                                    <Checkbox
                                        key={index}
                                        label={rating}
                                        onChange={() =>
                                            handleRatingChange(rating)
                                        }
                                        checked={selectedRatings.includes(
                                            rating
                                        )}
                                    />
                                ))}
                            </>
                        )}
                    </ul>
                </li>
            ))}
            <button
                className={styles.button}
                onClick={() =>
                    handleFilterClick(
                        selectedGenres.join(','),
                        selectedRatings.join(',')
                    )
                }
            >
                Apply
            </button>
        </ul>
    );
};

export default CatalogFilter;
