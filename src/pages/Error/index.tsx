import { Link } from 'react-router-dom';
import Lost from '$components/icons/Lost';
import ROUTES from '$constants/routes';

function NotFound() {
  return (
    <>
      <Lost />
      <h1>Something went wrong</h1>
      <Link to={ROUTES.HOME}>Go to the home page</Link>
    </>
  );
}

export default NotFound;
