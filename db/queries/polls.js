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

/**
 * Get poll with given link (admin or voter) from the database.
 * @param link poll link.
 * @return {Promise<{}>} A promise to the user.
 */
const getPollByLink = (link) => {
  return db.query(
    `SELECT * FROM polls
    WHERE voter_link = $1
    OR admin_link = $1
    `
    , [link])
    .then(data => {
      return data.rows[0];
    });
};

/**
 * set poll to be closed
 * @param id poll id.
 * @return {Promise<{}>} A promise to the user.
 */
const closePoll = (id) => {
  return db.query(
    `
    UPDATE polls
    SET active = false
    WHERE id = $1
    RETURNING *;
    `
    , [id])
    .then(data => {
      return data.rows;
    });
};


module.exports = { getPolls, getPollById, getPollByLink, closePoll };
