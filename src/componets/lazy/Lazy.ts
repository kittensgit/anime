import { lazy } from 'react';

export const LazyHomePage = lazy(() => import('../../pages/HomePage'));
export const LazyCatalogPage = lazy(() => import('../../pages/CatalogPage'));
export const LazyAnimeInfoPage = lazy(
    () => import('../../pages/AnimeInfoPage')
);
export const LazyOverviewPage = lazy(() => import('../../pages/OverviewPage'));
export const LazyCharactersPage = lazy(
    () => import('../../pages/CharactersPage')
);
export const LazyStaffPage = lazy(() => import('../../pages/StaffPage'));
export const LazyProfilePage = lazy(() => import('../../pages/ProfilePage'));
export const LazyWatchedPage = lazy(() => import('../../pages/WatchedPage'));
export const LazyWatchingPage = lazy(() => import('../../pages/WatchingPage'));
export const LazyToWatchPage = lazy(() => import('../../pages/ToWatchPage'));
export const LazyNotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
