import { Route, Routes } from 'react-router-dom';

import Header from './componets/header/Header';

import {
    AnimeInfoPage,
    CatalogPage,
    CharactersPage,
    HomePage,
    NotFoundPage,
    OverviewPage,
    StaffPage,
} from './pages/index';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:animeId/*" element={<AnimeInfoPage />}>
                    <Route path="characters" element={<CharactersPage />} />
                    <Route path="staff" element={<StaffPage />} />
                    <Route path="characters" element={<OverviewPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
