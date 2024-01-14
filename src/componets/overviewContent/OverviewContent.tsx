import { FC } from 'react';

import { IAnime } from 'types/anime';

import Details from './details/Details';
import Description from './decription/Description';

import styles from './OverviewContent.module.css';

interface OverviewContentProps {
    anime: IAnime;
}

const OverviewContent: FC<OverviewContentProps> = ({ anime }) => {
    return (
        <div className={styles.overview}>
            <Details anime={anime} />
            <Description synopsis={anime.synopsis} />
        </div>
    );
};

export default OverviewContent;
