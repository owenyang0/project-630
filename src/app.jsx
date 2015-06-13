import React from 'react';
import HomePage from './home';

const Home = React.createClass({
  render () {
    const props = this.props;
    return (
      <div className="container">
        <HomePage />
      </div>
    );
  }
});


React.render(<Home />, document.body);
