import ReactDOM from 'react-dom';
import Providers from './Providers';
import UserView from './user/UserView';
import './App.css';
import './_shared/theme.css';

function App() {
  return (
    <Providers>
      <div>
        <header className="header">
          <h1>User</h1>
        </header>
        <main className="content">
          <UserView />
        </main>
      </div>
    </Providers>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
