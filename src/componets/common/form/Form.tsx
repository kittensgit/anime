import { FC, useState } from 'react';

import styles from './Form.module.css';

interface FormProps {
    title: string;
    handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className={styles.form}>
            <label>Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                type="email"
            />
            <label>Password</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                type="password"
            />
            <button onClick={() => handleClick(email, password)}>
                {title}
            </button>
        </div>
    );
};

export default Form;
