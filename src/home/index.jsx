import React from 'react';
import numeral from 'numeral';
import Reflux from 'reflux';
import ReactSelect from 'react-select';

import MoneyBanner from './MoneyBannar';

import Header from '../../components/header'
import Footer from '../../components/footer'

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
        <div className="home-page__body">
          <div className="hero"></div>
        </div>
      </div>
    );
  }
});

export default HomePage;
