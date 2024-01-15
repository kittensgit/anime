import { Route, Routes } from 'react-router-dom';

import {
    LazyHomePage,
    LazyCatalogPage,
    LazyNotFoundPage,
    LazyAnimeInfoPage,
    LazyOverviewPage,
    LazyCharactersPage,
    LazyStaffPage,
    LazyProfilePage,
    LazyToWatchPage,
    LazyWatchedPage,
    LazyWatchingPage,
    LazyLoginPage,
    LazySignUpPage,
} from 'lazy/Lazy';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/catalog" element={<LazyCatalogPage />} />
            <Route path="/catalog/:animeId/*" element={<LazyAnimeInfoPage />}>
                <Route path="" element={<LazyOverviewPage />} />
                <Route path="characters" element={<LazyCharactersPage />} />
                <Route path="staff" element={<LazyStaffPage />} />
            </Route>
            <Route path="/profile/*" element={<LazyProfilePage />}>
                <Route path="" element={<LazyWatchedPage />} />
                <Route path="watching" element={<LazyWatchingPage />} />
                <Route path="to-watch" element={<LazyToWatchPage />} />
                <Route path="*" element={<LazyNotFoundPage />} />
            </Route>
            <Route path="/login" element={<LazyLoginPage />} />
            <Route path="/sign-up" element={<LazySignUpPage />} />
            <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
