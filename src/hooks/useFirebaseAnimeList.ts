import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, push, ref, set } from 'firebase/database';

import { useAuth } from './useAuth';

export const useFirebaseAnimelist = (collection: string, data: any) => {
    const db = getDatabase();
    const navigate = useNavigate();
    const { id } = useAuth();

    const addAnimeToDatabase = useCallback(async () => {
        try {
            if (id && data) {
                const collectionRef = ref(
                    db,
                    `users/${id}/${collection}/animelist`
                );
                const newAnimeRef = push(collectionRef);
                await set(newAnimeRef, data);
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error(
                `Error interacting with Firebase during execute:`,
                error
            );
        }
    }, [db, id, data, navigate, collection]);

    return addAnimeToDatabase;
};
