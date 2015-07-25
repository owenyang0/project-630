
import React from 'react';

const menuLeft = [
  {
    title: '首页',
    link: '#'
  }, {
    title: '我的合同',
    link: '#'
  }, {
    title: '快速编辑',
    link: '#'
  }, {
    title: '商标注册',
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
    })

    var avatar = '/assets/images/avatar.jpg'

    return (
      <header className="header">
        <div className="site-nav">
          <ul className="site-nav__list">
            {menuL}
            <li className="site-nav__item site-nav__item--search">
              <input type="text" className="form-control" placeholder="Search" />
            </li>
            <li className="site-nav__item">
              <a href="#" className='icon icon--mail'></a>
            </li>
            <li className="site-nav__item">
              <a href="#">
                <img className='avatar' src={avatar} alt="avatar" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
});

export default Header;
