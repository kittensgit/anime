import { FC } from 'react';
import { Link } from 'react-router-dom';

import Form from 'componets/common/form/Form';

import styles from './SignUp.module.css';

interface SignUpProps {
    handleClick: (
        email: string,
        password: string,
        username: string,
        photo: File | null
    ) => void;
}

const SignUp: FC<SignUpProps> = ({ handleClick }) => {
    return (
        <div className={styles.signup}>
            <h2>Sign Up</h2>

            <Form isSignUp={true} title="Sign Up" handleClick={handleClick} />
            <Link className={styles.link} to={'/login'}>
                Already have an account? <span>Log in</span>
            </Link>
        </div>
    );
};

export default SignUp;
