
import React from 'react'
import Parallax from '../../libs/parallax'

const d = {
  extra: {
    background: '/assets/images/lady.png'
  }
}

const Contract = React.createClass({
  componentWillMount: function () {
  },
  render () {
    var styles = {
      backgroundImage: 'url(' + d.extra.background + ')'
    }

    return (
      <div className='contract'>
        <Parallax>
          <div className='contract__image' style={styles}></div>
        </Parallax>
        <div className='contract__content'>
          <img className='extra-image' src='/assets/images/phone.png' alt='phone'/>
          <a className='more' href='#'></a>
        </div>
      </div>
    )
  }
})

export default Contract

