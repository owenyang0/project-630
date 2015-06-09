import Reflux from 'reflux';

import homeActions from '../actions';

const homeStore = Reflux.createStore({
  // listenables: [
  //   homeActions
  // ],
  init: function() {
    this.info = {};
    this.listenTo(homeActions.fetchInfoByName.completed, this.onFetchInfoByNameCompleted);
  },
  onFetchInfoByNameCompleted(ret) {
    this.info = ret;
    this.trigger();
    console.log('onFetchInfoByNameCompleted');
  }
})

export default homeStore;
