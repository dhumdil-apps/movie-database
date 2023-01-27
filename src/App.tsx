import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NotFound from '$pages/NotFound';
import SkeletonPage from '$pages/SkeletonPage';
import Navigation from '$templates/Navigation';
import ROUTES from '$constants/routes';

const Home = lazy(() => import('$pages/Home'));
const Details = lazy(() => import('$pages/Details'));
const Favorites = lazy(() => import('$pages/Favorites'));

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Navigation />
            <Outlet />
          </>
        }
      >
        <Route
          index
          loader={({ params }) => {
            console.log(params.imdbID);
          }}
          action={({ params }) => {
            console.log({ params });
          }}
          element={
            <Suspense fallback={<SkeletonPage />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.MOVIE_DETAILS.base}/:${ROUTES.MOVIE_DETAILS.param}`}
          loader={({ params }) => {
            console.log(params.imdbID);
          }}
          action={({ params }) => {
            console.log({ params });
          }}
          element={
            <Suspense fallback={<SkeletonPage />}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.FAVORITES}
          loader={({ params }) => {
            console.log(params.imdbID);
          }}
          action={({ params }) => {
            console.log({ params });
          }}
          element={
            <Suspense fallback={<SkeletonPage />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
