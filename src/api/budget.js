import sp from 'superagent';

// const BASE_URL = 'http://budget.corporate.thoughtworks.com';
const BASE_URL = '/api';

var budgetApi = {
  fetchInfoByName(name) {
    return new Promise((resolve, reject) => {
      sp
        .get(`${BASE_URL}/service/accounts/name/${name}`)
        .end((err, res) => {
          if (err) {
            reject(err);
          }

          resolve(res.body)
        })
    })
  },

  getNamelistBy(input) {
    return new Promise((resolve, reject) => {
      sp
        .get(`${BASE_URL}/service/names/${input}`)
        .end((err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res.body)
        })
    })
  }
}

export default budgetApi;
