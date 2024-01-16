import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
    const { email, id, token, username } = useAppSelector(
        (state) => state.profile
    );

    return {
        isAuth: !!email,
        email,
        id,
        token,
        username,
    };
};
