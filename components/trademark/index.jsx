
import React from 'react'

import Product from './product'


const products = [{
  title: '国内商标注册',
  desc: '24小时提交'
}, {
  title: '国内商标驳回复审',
  desc: '挽回商标利器'
}, {
  title: '商标变更',
  desc: '地址、名义变更、规避商标使用风险'
}, {
  title: '商标议异',
  desc: '商标侵权发生，商标议异当先'
}
]

const Trademark = React.createClass({
  componentWillMount: function () {
  },
  render () {

    let ps = products.map(function (p, idx) {
      return (
        <Product {...p} />
      )
    });

    return (
      <section className='display'>
        <h2 className='display__title'>产品推荐</h2>
        <div className='display__content display__content--recommend'>
          <div className='products'>
            <div className='products__unit'>
              {ps}
            </div>
          </div>
        </div>
      </section>
    )
  }
})

export default Trademark

