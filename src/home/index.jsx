import React from 'react';
import Reflux from 'reflux';
import ReactSelect from 'react-select';

import Header from '../../components/header'
import Carousel from '../../components/carousel'
import Footer from '../../components/footer'

import homeActions from './actions';
import homeStore from './stores/homeStore';


const HomePage = React.createClass({
  mixins:[
    Reflux.listenTo(homeStore, 'onHomeStoreUpdate')
  ],
  getInitialState: function() {
    return {
      info: {}
    }
  },
  componentWillMount: function() {
  },
  render () {

    return (
      <div className='content content--home'>
        <div className='content__body content__body--home'>
          <Carousel/>
        </div>
      </div>
    )
  }
})

export default HomePage
