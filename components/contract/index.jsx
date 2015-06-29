
import React from 'react';

const Contract = React.createClass({
  componentWillMount: function() {
  },
  render () {
    var styles = {
      backgroundImage: 'url(http://metaversemodsquad.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-26-at-10.36.15-AM.png)'
    };

    return (
      <div className="news-element">
          <span className="ne-tag article"></span>
          <a className="ne-img" style={styles} href="#"></a>
          <div className="ne-main">
              <div className="ne-copy">
                  <div className="ne-headline">Metaverse Mod Squad Establishes European Operation Center in Northern Ireland</div>
                  <div className="ne-meta">Metaverse | 06/24/2015</div>
                  <div className="ne-excerpt">Brick and mortar alert!&nbsp; We are very excited to announce today the opening of our first European operation...</div>
              </div>
              <a className="ne-link" href="#"></a>
          </div>
      </div>
    );
  }
});

export default Contract;

