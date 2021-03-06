import React from 'react';
import { Route, Link, run, RouteHandler, HashLocation } from 'react-router';

import Header from '../components/header'
import Footer from '../components/footer'
import HomePage from './home';
import ChannelPage from './channel';
import RevisionPage from './revisions';
import ProductPage from './product';

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

var routes = (
  <Route handler={App}>
    <Route path="/" handler={HomePage}>
    </Route>
    <Route path="channel" handler={ChannelPage}/>
    <Route path="channel/revision" handler={RevisionPage}/>
    <Route path="product/:productId" handler={ProductPage}/>
  </Route>
);

run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});

