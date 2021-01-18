import { Suspense, lazy } from 'react';

const UserView = lazy(() => import('user/UserView'));

function Header() {
  return (
    <header className="header">
      <h1>Docs</h1>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserView condensed />
      </Suspense>
    </header>
  );
}

export default Header;
