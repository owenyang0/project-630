import Reflux from 'reflux';

import api from '../api/budget';

const opts = {
  asyncResult: true,
}

const fetchInfoByName = Reflux.createAction(opts);

fetchInfoByName.listen(function(name) {
  api.fetchInfoByName(name)
    .then(this.completed)
    .catch(this.failed)
});


const getNamelistBy = Reflux.createAction(opts);
getNamelistBy.listen(function(input) {
  api.getNamelistBy(input)
    .then(this.completed)
    .catch(this.failed)
});

export default {
  fetchInfoByName: fetchInfoByName,
  getNamelistBy: getNamelistBy
}
