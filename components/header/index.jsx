
import React from 'react';
import classNames from 'classNames';

const menuLeft = [
  {
    title: '首页',
    link: '#'
  }, {
    title: '帐户区',
    link: '#'
  }
];

const menuRight = [
  {
    title: '频道1',
    link: '#'
  }, {
    title: '频道2',
    link: '#'
  }, {
    title: '登陆',
    link: '#'
  }, {
    title: '注册',
    link: '#'
  }
];

const PropTypes = React.PropTypes;
const Header = React.createClass({
  componentWillMount: function() {
  },
  render () {
    const props = this.props;

    var menuL = menuLeft.map((menu) => {
      return (
        <li className="site-nav__item">
          <a href={menu.link}>{menu.title}</a>
        </li>
      );
    });

    var menuR = menuRight.map((menu) => {
      return (
        <li className="site-nav__item">
          <a href={menu.link}>{menu.title}</a>
        </li>
      );
    });
    return (
      <header className="home-page__header">
        <div className="logo">
          <h1>Logo 区域</h1>
        </div>
        <div className="site-nav">
          <ul className="site-nav__list">
            {menuL}
            <li className="site-nav__item site-nav__item--search">
              <input type="text" placeholder="Search" />
            </li>
            {menuR}
          </ul>
        </div>
      </header>
    );
  }
});

export default Header;
