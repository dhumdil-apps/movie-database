import { useEffect } from 'react';
import { ROUTES } from '$constants/routes';
import { useRouterStore } from '$store/router';

function Favorites() {
  const setActiveRoute = useRouterStore((state) => state.setActiveRoute);

  useEffect(() => {
    setActiveRoute(ROUTES.FAVORITES);
    throw new Error();
  }, []);

  return <h1>Favorites</h1>;
}

export default Favorites;
