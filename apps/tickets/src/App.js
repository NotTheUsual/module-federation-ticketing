import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Providers from './Providers';
import Header from './header/Header';
import TicketsView from './tickets/TicketsView';
import('user/_shared/theme.css');
import './App.css';

function App() {
  return (
    <Providers>
      <section>
        <Header />
        <main className="content">
          <TicketsView />
        </main>
      </section>
    </Providers>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
