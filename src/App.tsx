import { Suspense } from 'react';

import Header from 'componets/header/Header';
import Loading from 'componets/common/loading/Loading';

import AppRoutes from 'routes/AppRoutes';

const App = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loading />}>
                <AppRoutes />
            </Suspense>
        </div>
    );
};

export default App;
