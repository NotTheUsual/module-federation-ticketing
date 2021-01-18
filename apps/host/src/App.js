import ReactDOM from 'react-dom';
import Providers from './Providers';
import Header from './header/Header';
import Routes from './routes/Routes';
import('user/_shared/theme.css');
import './App.css';

function App() {
  return (
    <Providers>
      <section>
        <Header />
        <main className="content">
          <Routes />
        </main>
      </section>
    </Providers>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
