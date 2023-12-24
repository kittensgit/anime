import { Route, Routes } from 'react-router-dom';

import Header from './componets/Header/Header';

import {
    AnimeInfoPage,
    CatalogPage,
    HomePage,
    NotFoundPage,
} from './pages/index';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:animeId" element={<AnimeInfoPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
