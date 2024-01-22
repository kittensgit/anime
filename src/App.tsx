import { Suspense } from 'react';

import Header from 'componets/header/Header';
import Loading from 'componets/common/loading/Loading';
import Footer from 'componets/footer/Footer';

import AppRoutes from 'routes/AppRoutes';

import { useAuth } from 'hooks/useAuth';

const App = () => {
    const { isAuth, photo } = useAuth();
    return (
        <div className="app">
            <Header isAuth={isAuth} photo={photo} />
            <div className="main-container">
                <Suspense fallback={<Loading />}>
                    <AppRoutes />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
};

export default App;
