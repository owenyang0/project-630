import React from 'react';
import Reflux from 'reflux';
import ReactSelect from 'react-select';

import Carousel from '../../components/carousel'
import Contract from '../../components/contract'
import Comment from '../../components/comment'

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
          <Carousel />
          <Contract />
          <Comment />
        </div>
      </div>
    )
  }
})

export default HomePage
