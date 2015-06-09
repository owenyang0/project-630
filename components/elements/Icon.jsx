import React from 'react';
import classNames from 'classnames';

const PropTypes = React.PropTypes;

/**
 * Icon.
 */
const Icon = React.createClass({
  propTypes: {
    /**
     * type name of Icon, will same as the filename.
     * @exampleFile ./examples/Icon.jsx
     */
    type: PropTypes.string
  },

  render() {

    const props = this.props;
    const classes = {};

    props.type && (classes[props.type] = true);

    classes['icon'] = true;

    return (
      <i className={classNames(classes)}/>
    )
  }
});

export default Icon;

