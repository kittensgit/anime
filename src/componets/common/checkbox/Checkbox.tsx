import { FC } from 'react';

import styles from './Checkbox.module.css';

interface CheckboxProps {
    label: string;
    onChange: () => void;
    checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ label, onChange, checked }) => (
    <li className={styles.checkbox}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <label>{label}</label>
    </li>
);

export default Checkbox;
