
import React from 'react';

const d = {
  title: '美术作品著作权',
  meta: '美术版权 | 06/24/2015',
  excerpt: '企业的logo不仅仅是商标，更是重要版权；产品的外包装，做美术版权；企业全套VI设计更是需要版权的保护。',
  extra: {
    background: 'http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-26-at-10.36.15-AM.png'
  }
}

const Contract = React.createClass({
  componentWillMount: function() {
  },
  render () {
    const props = this.props;
    const data = props.data;

    var styles = {
      backgroundImage: 'url(' + data.extra.background + ')'
    };
    console.log(props);

    return (
      <div className="news-element">
          <span className="ne-tag article"></span>
          <a className="ne-img" style={styles} href="#"></a>
          <div className="ne-main">
              <div className="ne-copy">
                  <div className="ne-headline">{data.title}</div>
                  <div className="ne-meta">{data.meta}</div>
                  <div className="ne-excerpt">{data.excerpt}</div>
              </div>
              <a className="ne-link" href="#"></a>
          </div>
      </div>
    );
  }
});

export default Contract;

