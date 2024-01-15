import { FC } from 'react';
import { Link } from 'react-router-dom';

import Form from 'componets/common/form/Form';

interface SignUpProps {
    handleClick: (email: string, password: string) => void;
}

const SignUp: FC<SignUpProps> = ({ handleClick }) => {
    return (
        <div>
            <h2>Sign Up</h2>
            <Form title="sign up" handleClick={handleClick} />
            <Link to={'/login'}>Have you already an acount? Log in.</Link>
        </div>
    );
};

export default SignUp;
