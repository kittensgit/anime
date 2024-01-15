import { FC } from 'react';
import { Link } from 'react-router-dom';

import Form from 'componets/common/form/Form';

import styles from './Login.module.css';

interface LoginProps {
    handleClick: (email: string, password: string) => void;
}

const Login: FC<LoginProps> = ({ handleClick }) => {
    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <Form title="Log In" handleClick={handleClick} />
            <Link className={styles.link} to={'/sign-up'}>
                Don't have an account? <span>Sign Up</span>
            </Link>
        </div>
    );
};

export default Login;
