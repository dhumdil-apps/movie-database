import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ROUTES } from '$constants/routes';
import { useRouterStore } from '$store/router';

function Details() {
  const params = useParams();
  const setActiveRoute = useRouterStore((state) => state.setActiveRoute);

  useEffect(() => {
    setActiveRoute(ROUTES.MOVIE_DETAILS);
  }, []);

  console.log({ params });

  return <h1>Details</h1>;
}

export default Details;
