import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'componets/common/loading/Loading';
import CharactersCards from 'componets/charactersCards/CharactersCards';
import Error from 'componets/common/error/Error';

import { useGetCharactersQuery } from 'services/AnimeService';

const CharactersPage: FC = () => {
    const { animeId } = useParams();

    const { data, isLoading, isError } = useGetCharactersQuery(animeId!);

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <CharactersCards characterList={data.data} />
            ) : (
                <Error />
            )}
        </div>
    );
};

export default CharactersPage;
