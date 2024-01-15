import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import SignUp from 'componets/signup/SignUp';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { setUser } from '../redux/profileSlice';

const SignUpPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSignUp = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        <div className="container">
            <SignUp handleClick={handleSignUp} />
        </div>
    );
};

export default SignUpPage;
