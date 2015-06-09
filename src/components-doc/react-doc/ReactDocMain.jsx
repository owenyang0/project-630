var React = require('react');
var _ = require('lodash');

var DocSection = require('./DocSection.jsx');
var ReactBemRender = require('react-bem-render');

var ReactDocMain = React.createClass({
  mixins: [
    ReactBemRender
  ],

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  propTypes: {
    globalRequire: React.PropTypes.func,
    info: React.PropTypes.object
  },

  $render() {
    return (
      <div {...this.props} block={this.$$block}>
        {this.renderDocMain()}
      </div>
    );
  },

  renderDocMain() {

    var params = this.context.router.getCurrentParams();

    var docSectionList = _(this.props.info)
      .filter((item)=> {
        if (_.isEmpty(params)) {
          return true;
        }
        if (params.componentName) {
          return item.name === params.componentName;
        }
        return String(item.module).indexOf(params.groupName.split('.').join('/')) > -1;
      })
      .values()
      .map((item, idx)=> {
        return (
          <DocSection
            key={idx}
            id={item.module + '.' + item.name}
            globalRequire={this.props.globalRequire}
            info={item}
            />
        )
      })
      .value();

    return (
      <main elem='doc-main'>
        {docSectionList}
      </main>
    )
  }

});

module.exports = ReactDocMain;
