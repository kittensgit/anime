import { FC, useState } from 'react';

import styles from './Form.module.css';

interface FormProps {
    isSignUp?: boolean;
    title: string;
    handleClick: (email: string, password: string, username: string) => void;
}

const Form: FC<FormProps> = ({ title, isSignUp, handleClick }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    return (
        <div className={styles.form}>
            {isSignUp && (
                <>
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        type="text"
                    />
                </>
            )}
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
            <button onClick={() => handleClick(email, password, username)}>
                {title}
            </button>
        </div>
    );
};

export default Form;
