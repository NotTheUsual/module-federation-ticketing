import { Component, Suspense } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>😬</p>;
    }

    return this.props.children;
  }
}

function ViewWrapper({ children }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading view...</p>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default ViewWrapper;
