require('dotenv').config();

const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, 
  })
);
app.use(express.static('public'));

const pollsRoutes = require('./routes/polls');
const pollsApiRoutes = require('./routes/poll-api');

app.use('/api/polls', pollsRoutes);
app.use('/polls', pollsApiRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
