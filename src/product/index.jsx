
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
}];

var tags = new Map();

tags.set(1, {
  name: '版本1',
  date: '6/12/2015'
});

tags.set(2, {
  name: '版本2',
  date: '6/22/2015'
});

const PropTypes = React.PropTypes;

const ProductPage = React.createClass({
  componentWillMount: function() {
  },
  getInitialState: function() {
    return {
      tags: tags
    }
  },
  render () {
    const props = this.props;
    const state = this.state;

    console.log('id', props.params.productId);
    let comparing = R.take(2, versions).map(function(ver, idx) {
      return (
        <Contract data={ver} />
      );
    });

    let ts = [...state.tags.values()].map(function(tag, idx) {
      return (
        <button className="btn btn--tag">{tag.name} | {tag.date}</button>
      );
    });

    return (
      <div className="page page--channel">
        <div className="page__body">
          <section className="revision__details">
            <div className="revision-bar">
              <div className="em"></div>
              <div className="revision-bar__unit">
                <div className="dot"></div>
                <label className="name">杨小白</label>
              </div>
              <div className="revision-bar__unit">
                <div className="dot"></div>
                <label className="name">张松</label>
              </div>
              <div className="revision-bar__unit">
                <div className="dot"></div>
                <label className="name">李小弘</label>
              </div>
            </div>
          </section>
          <section className="revision__body">
            <Contract data={versions[0]} />
          </section>
        </div>
      </div>
    );
  }
});

export default ProductPage;
