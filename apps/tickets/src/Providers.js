import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache()

function Providers({ children }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {children}
    </ReactQueryCacheProvider>
  );
}
export default Providers;
