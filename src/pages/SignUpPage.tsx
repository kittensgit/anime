import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import SignUp from 'componets/signup/SignUp';
import Loading from 'componets/common/loading/Loading';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { setUser } from '../redux/profileSlice';

const SignUpPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (
        email: string,
        password: string,
        username: string,
        photo: File | null
    ) => {
        const auth = getAuth();
        const storage = getStorage();

        try {
            setLoading(true);

            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            let downloadURL = null;

            if (photo) {
                const storageReference = ref(
                    storage,
                    `user_photos/${user.uid}`
                );
                await uploadBytes(storageReference, photo);
                downloadURL = await getDownloadURL(storageReference);
            }

            if (downloadURL !== null) {
                await updateProfile(user, {
                    displayName: username,
                    photoURL: downloadURL,
                });

                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                        username,
                        photo: downloadURL,
                    })
                );

                navigate('/profile');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="container">
            {loading ? <Loading /> : <SignUp handleClick={handleSignUp} />}
        </div>
    );
};

export default SignUpPage;
