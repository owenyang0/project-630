
import React from 'react'

const Partners = React.createClass({
  render () {
    return (
      <section className='display'>
        <h2 className='display__title'>合作伙伴</h2>
        <div className='display__content display__content--partners'>
          <div className='partners'>
            <div className='partners__unit'>
              <a target='_blank' href='https://www.amazonaws.cn/'>
                <img src='/assets/images/partners/amazon.png' alt='Amazon'/>
              </a>
            </div>
            <div className='partners__unit'>
              <a target='_blank' href='https://www.amazonaws.cn/'>
                <img src='/assets/images/partners/luosimao.png' alt='luosimao'/>
              </a>
            </div>
            <div className='partners__unit'>
              <a target='_blank' href='https://www.amazonaws.cn/'>
                <img src='/assets/images/partners/qiniu.png' alt='qiniu'/>
              </a>
            </div>
            <div className='partners__unit'>
              <a target='_blank' href='https://www.amazonaws.cn/'>
                <img src='/assets/images/partners/tower.png' alt='tower'/>
              </a>
            </div>
            <div className='partners__unit'>
              <a target='_blank' href='https://www.amazonaws.cn/'>
                <img src='/assets/images/partners/teambition.png' alt='teamtibion'/>
              </a>
            </div>
            <div className='partners__unit'>
              <a target='_blank' href='https://www.amazonaws.cn/'>
                <img src='/assets/images/partners/xiumi.png' alt='xiumi'/>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
})

export default Partners
