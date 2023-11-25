const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
const { generateRandomString } = require('../public/scripts/helpers');
const pollsQueries = require('../db/queries/polls');
const choiceQueries = require('../db/queries/choices');
const  mailNewPoll  = require('../public/scripts/mail').mailNewPoll;


module.exports = router;