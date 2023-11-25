const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM polls;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
