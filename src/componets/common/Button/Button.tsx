import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

interface ButtonProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ to, children, className }) => {
    return (
        <Link to={to}>
            <button className={styles.btn + ' ' + className}>{children}</button>
        </Link>
    );
};

export default Button;
