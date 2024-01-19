import { FC, useEffect, useState } from 'react';
import { get, getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';

import AnimeCards from 'componets/animeCards/AnimeCards';

import { IAnime } from 'types/anime';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { removeWatched } from '../redux/profileSlice';

const WatchedPage: FC = () => {
    const dispatch = useAppDispatch();

    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();

    const [watchedAnime, setWatchedAnime] = useState<any[]>([]);
    useEffect(() => {
        if (userId) {
            fetchWatchedAnime(userId).then((watchedList) => {
                if (watchedList) {
                    const watchedListArray = Object.values(watchedList);
                    setWatchedAnime(watchedListArray);
                }
            });
        }
    }, [userId]);

    const fetchWatchedAnime = async (userId: string) => {
        try {
            const watchedlistRef = ref(
                db,
                `users/${userId}/watchedlist/animelist`
            );
            const watchedlistSnapshot = await get(watchedlistRef);

            if (watchedlistSnapshot.exists()) {
                const watchedlistData: IAnime[] = watchedlistSnapshot.val();
                return watchedlistData;
            } else {
                console.log('Пользователь еще не просмотрел аниме');
                return null;
            }
        } catch (error) {
            console.error(
                'Ошибка при получении данных о просмотренных аниме:',
                error
            );
            return null;
        }
    };

    const handleDeleteAnime = (id: number) => {
        dispatch(removeWatched(id));
    };

    return (
        <div>
            <AnimeCards animelist={watchedAnime} onDelete={handleDeleteAnime} />
        </div>
    );
};

export default WatchedPage;
