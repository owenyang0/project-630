var React = require('react');
var _ = require('lodash');

var CodeMirrorEditor = require('./CodeMirrorEditor.jsx');
var babel = require('babel');

var selfCleaningTimeout = {
  componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },
  setTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  }
};

var ReactPlayground = React.createClass({
  mixins: [
    selfCleaningTimeout,
    require('react-bem-render')
  ],

  MODES: {JSX: 'JSX', JS: 'JS', NONE: null},

  propTypes: {
    codeText: React.PropTypes.string.isRequired,
    transformer: React.PropTypes.func,
    renderCode: React.PropTypes.bool,
    scope: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      transformer(code) {
        return babel.transform(code).code;
      }
    };
  },

  getInitialState() {
    return {
      mode: this.MODES.NONE,
      code: this.props.codeText,
      device: 'iphone4'
    };
  },

  handleCodeChange(value) {
    this.setState({code: value});
    this.executeCode();
  },

  handleCodeModeSwitch(mode) {
    this.setState({mode: mode});
  },

  handleCodeModeToggle(e) {
    var mode;

    e.preventDefault();

    switch (this.state.mode) {
      case this.MODES.NONE:
        mode = this.MODES.JSX;
        break;
      case this.MODES.JSX:
      default:
        mode = this.MODES.NONE;
    }

    this.setState({mode: mode});
  },

  compileCode() {
    return this.props.transformer(this.state.code);
  },

  $render() {

    var modifies = {};

    var editor;

    if (this.state.mode !== this.MODES.NONE) {
      editor = (
        <CodeMirrorEditor
          elem
          key="jsx"
          onChange={this.handleCodeChange}
          codeText={this.state.code}/>
      );
      modifies.open = true;
    }

    var deviceMods = {};

    deviceMods[this.state.device] = true;

    var devices = [
      'iphone4',
      'iphone5',
      'iphone6',
      'iphone6s',
      'nexus4',
      'nexus5'
    ];

    return (
      <div {...this.props} block={this.$$block}>
        <div elem='example'>
          <select elem='select' onChange={this.setDevice}>
            {_.map(devices, function (value, key) {
              return (<option key={key} value={value}>{value}</option>)
            })}
          </select>

          <div elem='example-inner'>
            <div elem='device' mods={deviceMods} ref="mount"/>
          </div>
        </div>
        {editor}
        <a elem='code-toggle' mods={modifies} onClick={this.handleCodeModeToggle}
           href="#">{this.state.mode === this.MODES.NONE ? 'show code' : 'hide code'}</a>
      </div>
    );
  },

  setDevice(evt) {
    this.setState({
      device: evt.target.value
    })
  },

  componentDidMount() {
    this.executeCode();
  },

  componentWillUpdate(nextProps, nextState) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.state.code !== nextState.code) {
      this.executeCode();
    }
  },

  componentWillReceiveProps(nextProps) {
    if (this.state.code !== nextProps.codeText) {
      this.setState({
        code: nextProps.codeText
      }, ()=> {
        this.executeCode();
      });
    }
  },

  componentWillUnmount() {
    var mountNode = this.refs.mount.getDOMNode();
    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
    }
  },

  executeCode: function () {
    var mountNode = this.refs.mount.getDOMNode();

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
    }

    try {
      var compiledCode = this.compileCode();
      if (this.props.renderCode) {
        React.render(
          <CodeMirrorEditor elem codeText={compiledCode} readOnly={true}/>,
          mountNode
        );
      } else {

        // todo find better way

        var Inst;

        eval(
          'Inst = function(require){\n' + compiledCode + '\n};'
        );

        Inst.call(null, this.props.globalRequire);

      }
    } catch (err) {
      this.setTimeout(()=> {
        console.error(err)
      }, 500);
    }
  }
});

module.exports = ReactPlayground;
