import React from 'react';

import Contract from '../../components/contract';

const channel = [{
  title: '美术作品著作权',
  meta: '美术版权 | 06/24/2015',
  excerpt: '企业的logo不仅仅是商标，更是重要版权；产品的外包装，做美术版权；企业全套VI设计更是需要版权的保护。',
  extra: {
    background: 'http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-26-at-10.36.15-AM.png'
  }
}, {
  title: '文字作品著作权',
  meta: '文字版权 | 03/01/2015',
  excerpt: '每个企业都有自己的创业故事，把它保护起来吧！如果您是文创类的公司，人说IP为王，你的创作能产生巨大的商业价值；企业司歌的歌词，其实是可以作为文字版权的； 自媒体时代，随手的一段文字，都是你的版权。',
  extra: {
    background: 'http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-24-at-6.05.56-AM.png'
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

const ChannelPage = React.createClass({
  componentWillMount: function() {
  },
  render () {
    const props = this.props;
    let contracts = channel.map(function(ctract, idx) {
      return (
        <Contract data={ctract} />
      );
    });

    return (
      <div className="page page--channel">
        <div className="page__body">
          <div className="news-container">
            {contracts}
          </div>
          <div className="contract-control">
            <a href="#" className="read-more red-button-arrow-left">最近</a>
            <a href="#" className="read-more red-button-arrow">更多</a>
          </div>
        </div>
      </div>
    );
  }
});

export default ChannelPage;
