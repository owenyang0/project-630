
import React from 'react'

const Product = React.createClass({
  componentWillMount: function () {
  },
  render () {
    const props = this.props

    return (
      <div className='product'>
        <div className='icon'>
          <img src="/assets/images/cloud.png" alt="" />
        </div>
        <h3 className='title'>{props.title}</h3>
        <div className='desc'>{props.desc}</div>
        <button className='btn--product'>立即体验</button>
      </div>
    )
  }
})

export default Product

