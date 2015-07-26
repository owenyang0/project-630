
import React from 'react'
import Parallax from '../../libs/parallax'

const background = '/assets/images/comment-show.png'

const Comment = React.createClass({
  componentWillMount: function () {
  },
  render () {
    var styles = {
      backgroundImage: 'url(' + background + ')'
    }

    return (
      <section className='stick'>
        <Parallax>
          <div className='stick__image' style={styles}></div>
        </Parallax>
        <div className='stick__content stick__content--comment'>
          <img className='extra-image' src='/assets/images/phone.png' alt='phone'/>
          <a className='more' href='#'></a>
        </div>
      </section>
    )
  }
})

export default Comment

