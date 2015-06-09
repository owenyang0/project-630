
import React, {
  creatElement
  } from 'react'

import classNames from 'classnames';

import Icon from 'components/elements/Icon'

const PropTypes = React.PropTypes;

/**
 * Button.
 */
const Button = React.createClass({

  propTypes: {
    /**
     * color of Button
     * @exampleFile ./examples/ButtonWithColor.jsx
     */
    color: PropTypes.string,
    /**
     * size of Button
     * @exampleFile ./examples/ButtonWithSize.jsx
     */
    size: PropTypes.string,
    /**
     * icon in Button
     */
    icon: PropTypes.string,
    /**
     * labeled icon
     * @exampleFile ./examples/ButtonWithIcon.jsx
     */
    iconLabeled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    /**
     * fluid button
     * @example

     var React = require('react');
     var Button = require('./Button.jsx');

     var instance = (
     <div>
     <Button fluid> black </Button>
     </div> );

     React.render(instance, mountNode);

     */
    fluid: PropTypes.bool,
    /**
     * circular button ( **notice**: no effect with labeled )
     * @example

     var React = require('react');
     var Button = require('./Button.jsx');

     var instance = (
     <div>
     <Button icon='cloud' circular> circular button </Button>
     <Button icon='cloud' circular/>
     </div> );

     React.render(instance, mountNode);

     */
    circular: PropTypes.bool
  },

  render() {

    const props = this.props;

    const classes = {
      'fluid': !!props.fluid,
      [props.size]: true,
      'ui': true,
      'right': props.iconLabeled == 'right',
      'labeled': !!props.iconLabeled,
      'circular': !!props.circular,
      'icon': !!props.icon,
      [props.color]: true,
      'button': true
    };

    delete classes[undefined];

    return (
      <button className={classNames(classes)}>
        { props.icon ? <Icon type={props.icon}/> : '' }
        { props.children }
      </button>
    )
  }
});

export default Button;

