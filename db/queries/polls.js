const db = require('../connection');

/**
 * Get polls from the database..
 * @return {Promise<{}>} 
 */

const getPolls = () => {
  return db.query('SELECT * FROM polls;')
    .then(data => {
      return data.rows;
    });
};


module.exports = { getPolls };
