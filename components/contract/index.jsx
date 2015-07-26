
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
      <section className='stick'>
        <Parallax>
          <div className='stick__image' style={styles}></div>
        </Parallax>
        <div className='stick__content'>
          <img className='extra-image' src='/assets/images/phone.png' alt='phone'/>
          <div className='slogan'>
            <div className='slogan__title'>
              <p>手机管合同</p>
              <p>马上出发！</p>
            </div>
            <div className='slogan__desc'>
              <p>管理合同太麻烦?</p>
              <p>合同修改太麻烦?</p>
            </div>
            <div className='slogan__desc--add'>NO!</div>
            <a className='more' href='#'>了解更多></a>
          </div>
        </div>
      </section>
    )
  }
})

export default Contract

