import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom';

const queryCache = new QueryCache()

function Providers({ children }) {
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
        {children}
      </ReactQueryCacheProvider>
    </Router>
  );
}
export default Providers;
