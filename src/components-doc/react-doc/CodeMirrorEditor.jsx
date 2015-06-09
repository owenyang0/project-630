var React = require('react');
var CodeMirror = require('codemirror');

require('codemirror/mode/javascript/javascript');

var IS_MOBILE = typeof navigator !== 'undefined' && (
  navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  );


var CodeMirrorEditor = React.createClass({

  mixins: [
    require('react-bem-render')
  ],

  componentDidMount: function () {
    if (IS_MOBILE) return;

    this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), {
      mode: 'javascript',
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      tabSize: 2,
      theme: 'solarized',
      readOnly: this.props.readOnly
    });
    this.editor.on('change', this.handleChange);
  },

  componentDidUpdate: function () {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  },

  handleChange: function () {
    if (!this.props.readOnly) {
      this.props.onChange && this.props.onChange(this.editor.getValue());
    }
  },

  $render: function () {
    // wrap in a div to fully contain CodeMirror
    var editor;

    if (IS_MOBILE) {
      var preStyles = {overflow: 'scroll'};
      editor = <pre style={preStyles}>{this.props.codeText}</pre>;
    } else {
      editor = <textarea ref="editor" defaultValue={this.props.codeText} />;
    }

    return (
      <div {...this.props} block={this.$$block}>
        {editor}
      </div>
    );
  }
});

module.exports = CodeMirrorEditor;
