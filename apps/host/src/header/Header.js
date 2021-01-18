import { Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const UserView = lazy(() => import('user/UserView'));

function Header() {
  return (
    <header className="header">
      <nav className="host-nav">
        <NavLink to="/tickets" className="host-nav__link">
          Tickets
        </NavLink>
        <NavLink to="/docs" className="host-nav__link">
          Docs
        </NavLink>
      </nav>
      <Suspense fallback={<p>Loading user...</p>}>
        <NavLink to="/profile" className="host-nav__profile-link">
          <UserView condensed />
        </NavLink>
      </Suspense>
    </header>
  );
}

export default Header;
