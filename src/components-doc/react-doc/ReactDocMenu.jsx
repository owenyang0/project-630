var React = require('react');
var _ = require('lodash');

var ReactBemRender = require('react-bem-render');

var { Link } = require('react-router');

var ReactDocMenu = React.createClass({

  mixins: [
    ReactBemRender
  ],

  propTypes: {
    baseDir: React.PropTypes.string,
    info: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      baseDir: process.cwd()
    }
  },

  $render() {

    var props = this.props;

    return (
      <div {...props} block={this.$$block}>
        <div elem='group'>
          <h2 elem='heading'>
            <Link to='/'> All </Link>
          </h2>
        </div>
        {
          _.map(this.getGroupsByInfo(props.info), (groupName, key)=> {
            return (
              <div elem='group' key={key}>
                <h2 elem='heading'>
                  <Link to={'/'+groupName}>{groupName}</Link>
                </h2>
                {this.renderMenuGroupByName(groupName)}
              </div>
            );
          })
        }
      </div>
    )
  },

  getGroupsByInfo(info) {

    var props = this.props;

    var groups = {};

    _.forEach(_.keys(info), (item)=> {
      groups[_.initial(item.replace(props.baseDir, '').split('/')).join('.')] = true;
    });

    return _.keys(groups)
  },

  renderMenuGroupByName(groupName) {
    var menuList = _(this.props.info)
      .values()
      .filter((item)=> {
        return String(item.module).indexOf(groupName.split('.').join('/')) > -1;
      })
      .map((item, idx)=> {
        return (
          <li elem='item' key={idx}>
            <Link to={'/'+groupName + '/' + item.name}> {item.name}</Link>
          </li>
        )
      })
      .value();

    return (
      <ul block='rd-doc-menu' elem>
        {menuList}
      </ul>
    )
  }

});

module.exports = ReactDocMenu;
