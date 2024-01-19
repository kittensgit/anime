import { useEffect, useState } from 'react';
import { ref, get, getDatabase } from 'firebase/database';

import { useAuth } from 'hooks/useAuth';
import { IAnime } from 'types/anime';

const useGetAnimeFromFirebase = (listType: string) => {
    const { id } = useAuth();
    const db = getDatabase();
    const [animeList, setAnimeList] = useState<IAnime[]>([]);

    useEffect(() => {
        const fetchAnimeList = async () => {
            try {
                const listRef = ref(db, `users/${id}/${listType}/animelist`);
                const listSnapshot = await get(listRef);

                if (listSnapshot.exists()) {
                    const listData = listSnapshot.val();
                    const listArray: IAnime[] = Object.values(listData);
                    setAnimeList(listArray);
                } else {
                    console.log(
                        `Пользователь еще не просмотрел аниме в списке ${listType}`
                    );
                    setAnimeList([]);
                }
            } catch (error) {
                console.error(
                    `Ошибка при получении данных о списке ${listType} аниме:`,
                    error
                );
                setAnimeList([]);
            }
        };

        if (id) {
            fetchAnimeList();
        }
    }, [id, listType, db]);

    return animeList;
};

export default useGetAnimeFromFirebase;
