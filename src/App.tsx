import { Suspense } from 'react';

import Header from 'componets/header/Header';
import Loading from 'componets/common/loading/Loading';

import AppRoutes from 'routes/AppRoutes';

import { useAuth } from 'hooks/useAuth';
import Footer from 'componets/footer/Footer';

const App = () => {
    const { isAuth, photo } = useAuth();
    return (
        <div>
            <Header isAuth={isAuth} photo={photo} />
            <Suspense fallback={<Loading />}>
                <AppRoutes />
            </Suspense>
            <Footer />
        </div>
    );
};

export default App;
