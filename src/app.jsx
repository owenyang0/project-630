import React from 'react';
import { Route, Link, run, RouteHandler, HashLocation } from 'react-router';

import HomePage from './home';

const App = React.createClass({
  render () {
    const props = this.props;
    return (
      <div className="container">
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route path="/" handler={HomePage}>
      <Route path="*" component={App}/>
    </Route>
  </Route>
);

run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});

