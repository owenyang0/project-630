
import React from 'react';

const Footer = React.createClass({
  componentWillMount: function() {
  },
  render () {
    return (
      <footer className="footer">
        <div className='container-small'>
          <div className='footer-content'>
            <ul className='links'>
              <li>
                <a href="#">关于我们</a>
              </li>
            </ul>
            <div className='qr'>
              <img src="/assets/images/qr.png" alt="qr" />
            </div>
          </div>
          <div className="footer-legal">
            <div className="footer-legal__desc">
              <p>Copyright © 2015 Deutsche Bank AG, All Rights Reserved. 京ICP备11015880号 | </p>
            </div>
            <a className="footer-legal__link" href='#'>用户留言</a>
            <a className="footer-legal__link" href='#'>网站地图</a>
          </div>
        </div>
      </footer>
    );
  }
});

export default Footer;
