import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorHandler } from '$components/ErrorHandler';
import { NoMatch } from '$pages/NoMatch';
import { ROUTES, ROUTES_PARAMS } from '$constants/routes';
import { useRouterStore } from '$store/router';
import { reload } from '$utils/reload';
import { logger } from '$utils/logger';

const Home = lazy(() => import('$pages/Home'));
const MovieDetails = lazy(() => import('$pages/MovieDetails'));
const Favorites = lazy(() => import('$pages/Favorites'));

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
          path={ROUTES.HOME}
          element={
            <Suspense fallback='Loading...'>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.MOVIE_DETAILS}/:${ROUTES_PARAMS.MOVIE_DETAILS}`}
          element={
            <Suspense fallback='Loading...'>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.FAVORITES}
          element={
            <Suspense fallback='Loading...'>
              <Favorites />
            </Suspense>
          }
        />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </ErrorBoundary>
  );
}
