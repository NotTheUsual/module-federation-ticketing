import { Suspense, lazy } from 'react';
import './Header.css';

const UserView = lazy(() => import('user/UserView'));

function Header() {
  return (
    <header className="header">
      <h1>Tickets</h1>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserView className="compact-user-view" />
      </Suspense>
    </header>
  );
}

export default Header;
