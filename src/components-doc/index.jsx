import React from 'react';
import ReactBemRender from 'react-bem-render';
import _ from 'lodash';

import ReactDocMenu from './react-doc/ReactDocMenu.jsx';
import ReactDocMain from './react-doc/ReactDocMain.jsx';

import info from './data/react-doc.js';
import globalRequire from './data/react-doc.jsx';

import { run, Route, DefaultRoute, RouteHandler } from 'react-router';

const ReactDoc = React.createClass({
  mixins: [
    ReactBemRender
  ],
  $render() {
    return (
      <div block={this.$$block}>
        <ReactDocMenu elem info={info} baseDir={'src/js/'}/>
        <RouteHandler info={info} globalRequire={globalRequire}/>
      </div>
    );
  }
});


const rootRoutes = (
  <Route name='react-doc' path='/' handler={ ReactDoc }>
    <DefaultRoute handler={ ReactDocMain }/>
    <Route name='react-doc-main-group' path='/:groupName' handler={ ReactDocMain }/>
    <Route name='react-doc-main' path='/:groupName/:componentName' handler={ ReactDocMain }/>
  </Route>
);

run(rootRoutes, function (Handler, state) {
  React.render(<Handler />, document.body);
});