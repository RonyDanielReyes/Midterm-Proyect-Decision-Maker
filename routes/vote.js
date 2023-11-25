const express = require('express');
const router  = express.Router();
const choicesQueries = require('../db/queries/choices');
const pollsQueries = require('../db/queries/polls');
const votesQueries = require('../db/queries/votes');
const mailNewVote = require('../public/scripts/mail').mailNewVote;


module.exports = router;
