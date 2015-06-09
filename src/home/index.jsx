import React from 'react';
import numeral from 'numeral';
import classNames from 'classNames';
import Reflux from 'reflux';
import ReactSelect from 'react-select';

import MoneyBanner from './MoneyBannar';


import homeActions from './actions';
import homeStore from './stores/homeStore';

const PropTypes = React.PropTypes;

const HomePage = React.createClass({
  mixins:[
    Reflux.listenTo(homeStore, 'onHomeStoreUpdate')
  ],
  getInitialState: function() {
    return {
      info: {}
    };
  },
  componentWillMount: function() {
    homeActions.fetchInfoByName('Lin,Fan')
  },
  onHomeStoreUpdate() {
    this.setState({
      info: homeStore.info
    })
  },
  getOptions(input, callback) {
    homeActions.getNamelistBy
      .triggerPromise(input)
      .then((ret) => {
        console.log('rrr', ret);
        callback(null, {
          options: ret.map((item) => {
            return {
              value: item,
              label: item
            }
          }),
          complete: true
        })
      })
  },
  onSelectChange(e) {

    homeActions.fetchInfoByName(e)
  },
  render () {
    const props = this.props;
    var info = this.state.info;

    return (
      <div className="home-page">
        <header className="home-page__header">
          This is logo
          <ReactSelect
              name="form-field-name"
              onChange={this.onSelectChange}
              asyncOptions={this.getOptions}
          />
        </header>
        <main className="home-page__main">
          <MoneyBanner spent={info.spent} balance={info.balance} overrun={info.overrun}/>
        </main>
      </div>
    );
  }
});

export default HomePage;
