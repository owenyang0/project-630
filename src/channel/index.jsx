import React from 'react';

import Contract from '../../components/contract';
const cinfos = [
  1, 2, 3
];

const PropTypes = React.PropTypes;

const ChannelPage = React.createClass({
  componentWillMount: function() {
  },
  render () {
    const props = this.props;
    let contracts = cinfos.map(function(ctract, idx) {
      return (
        <Contract />
      );
    });

    return (
      <div className="page page--channel">
        <div className="page__body">
          {contracts}
        </div>
      </div>
    );
  }
});

export default ChannelPage;
