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

/**
 * Get poll with given id from the database.
 * @param id poll id.
 * @return {Promise<{}>} A promise to the user.
 */
const getPollById = (id) => {
  return db.query('SELECT * FROM polls WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getPolls, getPollById };
