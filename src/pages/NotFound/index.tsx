import { Link } from 'react-router-dom';
import PageNotFound from '$components/icons/PageNotFound';
import ROUTES from '$constants/routes';

function NotFound() {
  return (
    <>
      <PageNotFound />
      <h1>Page Not Found</h1>
      <Link to={ROUTES.HOME}>Go to the home page</Link>
    </>
  );
}

export default NotFound;
