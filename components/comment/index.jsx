
import React from 'react'
import Parallax from '../../libs/parallax'

const background = '/assets/images/comment-show.png'
const backgroundRun = '/assets/images/run.png'

const Comment = React.createClass({
  componentWillMount: function () {
  },
  render () {
    var show = {
      backgroundImage: 'url(' + background + ')'
    }

    var run = {
      backgroundImage: 'url(' + backgroundRun + ')'
    }

    return (
      <section className='stick'>
        <Parallax>
          <div className='stick__image' style={show}></div>
        </Parallax>
        <div className='stick__content stick__content--comment'>
          <img className='extra-image' src='/assets/images/phone.png' alt='phone'/>
          <a className='more' href='#'>了解更多></a>
        </div>
        <Parallax>
          <div className='stick__image' style={run}></div>
        </Parallax>
      </section>
    )
  }
})

export default Comment

