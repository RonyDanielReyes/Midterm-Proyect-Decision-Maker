const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM votes;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
