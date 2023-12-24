import { Route, Routes } from 'react-router-dom';

import Header from './componets/Header/Header';

import {
    AnimeInfoPage,
    AnimeListPage,
    HomePage,
    NotFoundPage,
} from './pages/index';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/animelist" element={<AnimeListPage />} />
                <Route path="/animelist/:animeId" element={<AnimeInfoPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
