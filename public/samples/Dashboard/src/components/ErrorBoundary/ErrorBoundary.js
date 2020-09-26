import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    const { children, ...props } = this.props;
    if (this.state.hasError) {
      return (
        <div {...props}>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return <div {...props}>{children}</div>;
  }
}
