import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { NoMatch } from '$components/NoMatch';
import { ErrorHandler } from '$components/ErrorHandler';
import { ROUTES, ROUTES_PARAMS } from '$constants/routes';
import { reload } from '$utils/reload';
import { logger } from '$utils/logger';

const HomePage = lazy(() => import('src/pages/Home'));
const DetailsPage = lazy(() => import('src/pages/Details'));
const FavoritesPage = lazy(() => import('src/pages/Favorites'));

export function Router() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandler}
      onReset={reload}
      onError={logger}
    >
      <Routes>
        <Route
          index
          path='/'
          element={
            <Suspense fallback={<>...</>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.MOVIE_DETAILS}/:${ROUTES_PARAMS.MOVIE_DETAILS}`}
          element={
            <Suspense fallback={<>...</>}>
              <DetailsPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.FAVORITES}
          element={
            <Suspense fallback={<>...</>}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </ErrorBoundary>
  );
}
