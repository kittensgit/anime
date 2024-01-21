import { FC } from 'react';

import styles from './Error.module.css';

const Error: FC = () => {
    return (
        <h4 className={styles.error}>An error occurred while fetching data</h4>
    );
};

export default Error;
