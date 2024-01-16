import { Suspense } from 'react';

import Header from 'componets/header/Header';
import Loading from 'componets/common/loading/Loading';

import AppRoutes from 'routes/AppRoutes';

import { useAuth } from 'hooks/useAuth';

const App = () => {
    const { isAuth, username } = useAuth();
    return (
        <div>
            <Header isAuth={isAuth} username={username} />
            <Suspense fallback={<Loading />}>
                <AppRoutes />
            </Suspense>
        </div>
    );
};

export default App;
