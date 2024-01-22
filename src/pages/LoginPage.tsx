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
                        username: user.displayName,
                        photo: user.photoURL,
                    })
                );
                navigate('/profile');
            })
            .catch(console.error);
    };
    return (
        <div>
            <div className="container">
                <Login handleClick={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;
