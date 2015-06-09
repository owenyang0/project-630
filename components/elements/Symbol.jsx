import React from 'react'

const PropTypes = React.PropTypes;

const SVG_STORE_FILE_PATH = '../assets/images/svgs.svg';

/**
 * Symbol. need to update the SVG_STORE_FILE_PATH
 *
 * see more https://github.com/jonathantneal/svg4everybody
 */
const Symbol = React.createClass({
  propTypes: {
    /**
     * type name of Symbol, will same as the filename.
     * @exampleFile ./examples/Symbol.auto.jsx
     */
    type: PropTypes.string
  },

  render() {

    const props = this.props;

    return (
      <svg
        className='symbol'
        dangerouslySetInnerHTML={{
          __html:`<use xlink:href="${SVG_STORE_FILE_PATH}#${props.type}"/>`
        }}/>
    )
  }
});

export default Symbol;



