
import React from 'react'
import Slider from 'react-slick'

const Carousel = React.createClass({
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div>
            <div className='carousel--contract'></div>
          </div>
          <div>
            <div className='carousel--contract'></div>
          </div>
          <div>
            <div className='carousel--contract'></div>
          </div>
        </Slider>
      </div>
    )
  }
})

export default Carousel
