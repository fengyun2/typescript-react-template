import * as React from 'react';

import { Route } from 'react-router-dom';

import App from './App';

class Main extends React.Component<object, object> {
  render() {
    return (
      <div className="layout">
        <Route path="/" component={App as any} />
      </div>
    );
  }
}

export default Main;