
import React from 'react';
import classNames from 'classNames';

const Footer = React.createClass({
  componentWillMount: function() {
  },
  render () {
    return (
      <header className="home-page__footer">
        <div className="footer-head">
          <h3>版权页示意</h3>
        </div>
        <div className="footer-legal">
          <div className="footer-legal__state">
            Imprint | 法律声明
          </div>
          <div className="footer-legal__desc">
            <p>Last Update: June 10, 2015</p>
            <p>Copyright © 2015 Deutsche Bank AG, Frankfurt am Main</p>
          </div>
        </div>
      </header>
    );
  }
});

export default Footer;
