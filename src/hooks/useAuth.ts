import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
    const { email, id, token } = useAppSelector((state) => state.profile);

    return {
        isAuth: !!email,
        email,
        id,
        token,
    };
};
