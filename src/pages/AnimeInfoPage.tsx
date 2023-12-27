import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetAnimeByIdQuery } from '../services/AnimeService';

import AnimeInfo from '../componets/animeInfo/AnimeInfo';
import Loading from '../componets/common/loading/Loading';

const AnimeInfoPage: FC = () => {
    const { animeId } = useParams();

    const { data, isLoading, isError } = useGetAnimeByIdQuery(animeId!);

    const hasDataAndNoError = data && !isError;

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <AnimeInfo
                    title={data.data.title}
                    img={data.data.images.jpg.image_url}
                    score={data.data.score}
                />
            ) : (
                <p>An error occurred while fetching data</p>
            )}
        </div>
    );
};

export default AnimeInfoPage;
