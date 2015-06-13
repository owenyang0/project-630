import React from 'react';
import numeral from 'numeral';
import classNames from 'classNames';
import Reflux from 'reflux';
import ReactSelect from 'react-select';

import MoneyBanner from './MoneyBannar';

import Header from '../../components/header'

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
  },
  render () {
    const props = this.props;
    var info = this.state.info;

    return (
      <div className="home-page">
        <Header />
        <div className="home-page__body">
          main
        </div>
        <footer>
          <h1>footer</h1>
        </footer>
      </div>
    );
  }
});

export default HomePage;
