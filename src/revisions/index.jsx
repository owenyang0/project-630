import React from 'react';
import R from 'ramda';

import Contract from '../../components/contract';

const versions = [{
  title: '美术作品著作权',
  meta: '美术版权 | 06/24/2015',
  excerpt: '企业的logo不仅仅是商标，更是重要版权；产品的外包装，做美术版权；企业全套VI设计更是需要版权的保护。',
  extra: {
    background: 'http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-30-at-9.52.34-AM.png'
  }
}, {
  title: '美术作品著作权',
  meta: '美术版权 | 07/04/2015',
  excerpt: '产品的外包装，做美术版权；企业全套VI设计更是需要版权的保护。',
  extra: {
    background: 'http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-30-at-9.52.34-AM.png'
  }
}, {
  title: '软件作品著作权',
  meta: '计算机版权 | 01/10/2015',
  excerpt: '新软件上线啦，要做计算机版权！！！软件迭代了，要做版权！！！企业做高新或其他一些科技项目，也需要软件著作权！！！',
  extra: {
    background: 'http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-18-at-12.48.36-PM.png'
  }
}]


const PropTypes = React.PropTypes;

const RevisionsPage = React.createClass({
  componentWillMount: function() {
  },
  render () {
    const props = this.props;
    let comparing = R.take(2, versions).map(function(ver, idx) {
      return (
        <Contract data={ver} />
      );
    });

    return (
      <div className="page page--channel">
        <div className="page__body">
          <section className="version__body">
            <div className="news-container news-container--revision">
              {comparing}
            </div>
            <div className="contract-control">
              <a href="#" className="read-more red-button-arrow-left">版本4</a>
              <a href="#" className="read-more red-button-arrow">版本3</a>
            </div>
          </section>
          <section className="version__tag">
            <button className="btn btn--tag">标签1</button>
            <button className="btn btn--tag">标签2</button>
            <button className="btn btn--tag">标签3</button>
            <button className="btn btn--tag">标签4</button>
            <button className="btn btn--add">添加标签</button>
          </section>
        </div>
      </div>
    );
  }
});

export default RevisionsPage;
