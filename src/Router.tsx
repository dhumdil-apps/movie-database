import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorHandler } from '$components/ErrorHandler';
import { NoMatch } from '$components/NoMatch';
import { ROUTES, ROUTES_PARAMS } from '$constants/routes';
import { useRouterStore } from '$store/router';
import { reload } from '$utils/reload';
import { logger } from '$utils/logger';

const HomePage = lazy(() => import('$pages/Home'));
const DetailsPage = lazy(() => import('$pages/Details'));
const FavoritesPage = lazy(() => import('$pages/Favorites'));

export function Router() {
  const location = useLocation();
  const params = useParams();
  const updateRoute = useRouterStore((state) => state.updateRoute);

  useEffect(() => {
    updateRoute(location.pathname, params);
  }, [params, location, updateRoute]);

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
