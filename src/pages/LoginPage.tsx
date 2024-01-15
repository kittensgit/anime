import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Login from 'componets/login/Login';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { setUser } from '../redux/profileSlice';

const LoginPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    })
                );
                navigate('/profile');
            })
            .catch(console.error);
    };
    return (
        <div className="container" style={{ marginTop: '60px' }}>
            <Login handleClick={handleLogin} />
        </div>
    );
};

export default LoginPage;
