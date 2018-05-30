import * as React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import allRoutes from './routes/all';

class App extends React.Component < object,
object > {
  constructor(props: object) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <Switch>
          {allRoutes.map((item: object, i: number) => <Route key={i} {...item}/>)
}
          <Redirect from="*" to="/"/>
        </Switch>
      </div>

    );
  }
}

export default App;
