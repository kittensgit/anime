import { FC } from 'react';
import { Link } from 'react-router-dom';

import Form from 'componets/common/form/Form';

interface LoginProps {
    handleClick: (email: string, password: string) => void;
}

const Login: FC<LoginProps> = ({ handleClick }) => {
    return (
        <div>
            <h2>Login</h2>
            <Form title="Login" handleClick={handleClick} />
            <Link to={'/sign-up'}>Create a new acount.</Link>
        </div>
    );
};

export default Login;
