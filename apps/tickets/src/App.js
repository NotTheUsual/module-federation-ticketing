import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Providers from './Providers';
import TicketsView from './tickets/TicketsView';
import UserView from 'user/UserView';
import './App.css';

function App() {
  return (
    <Providers>
      <section>
        <h1>Tickets</h1>
        <p>This is the tickets page</p>
        <TicketsView />
        <Suspense fallback={<p>Loading user...</p>}>
          <UserView />
        </Suspense>
      </section>
    </Providers>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
