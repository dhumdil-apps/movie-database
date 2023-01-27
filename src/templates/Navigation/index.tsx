import { Link } from 'react-router-dom';
import ROUTES from '$constants/routes';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Search</Link>
        </li>
        <li>
          <Link to={ROUTES.FAVORITES}>Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
