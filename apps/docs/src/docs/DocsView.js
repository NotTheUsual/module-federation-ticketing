import { useQuery } from 'react-query';
import { fetchDocs } from './docsService';
import './DocsView.css';

function Doc({ doc }) {
  return (
    <li className="doc">
      <span className="doc__number">{doc.id}</span>
      {' '}
      {doc.title}
    </li>
  );
}

function DocsView() {
  const query = useQuery('docs', fetchDocs, { refetchOnWindowFocus: false, refetchOnReconnect: false });
  const { data: docs, isLoading } = query;

  if (isLoading) return <p>Loading...</p>

  return (
    <ul className="docs-list">
      {docs.map(doc => (
        <Doc key={doc.id} doc={doc} />
      ))}
    </ul>
  );
}

export default DocsView;
