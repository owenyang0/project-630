import React from 'react';
import { Route, Link, run, RouteHandler, HashLocation } from 'react-router';

import Header from '../components/header'
import Footer from '../components/footer'
import HomePage from './home';
import ChannelPage from './channel';

const App = React.createClass({
  render () {
    const props = this.props;
    return (
      <div className="container">
        <Header />
        <RouteHandler/>
        <Footer />
      </div>
    );
  }
});

console.log(ChannelPage);

var routes = (
  <Route handler={App}>
    <Route path="/" handler={HomePage}>
    </Route>
    <Route path="channel" handler={ChannelPage}/>
  </Route>
);

run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});

