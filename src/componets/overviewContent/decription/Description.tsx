import { FC } from 'react';

import { IAnime } from '../../../types/anime';

import styles from './Description.module.css';

interface DescriptionProps {
    synopsis: IAnime['synopsis'];
}

const Description: FC<DescriptionProps> = ({ synopsis }) => {
    const paragraphs = synopsis
        ? synopsis.split('\n').map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                  {paragraph}
              </p>
          ))
        : '';

    return (
        <div>
            <h2 className={styles.title}>Description</h2>
            <div className={styles.synopsis}>{paragraphs}</div>
        </div>
    );
};

export default Description;
