import { FC } from 'react';
import { useParams } from 'react-router-dom';

import StaffCards from 'componets/staffCards/StaffCards';
import Loading from 'componets/common/loading/Loading';
import Error from 'componets/common/error/Error';

import { useGetStaffQuery } from 'services/AnimeService';

const StaffPage: FC = () => {
    const { animeId } = useParams();

    const { data, isLoading, isError } = useGetStaffQuery(animeId!);

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <StaffCards stafflist={data.data} />
            ) : (
                <Error />
            )}
        </div>
    );
};

export default StaffPage;
