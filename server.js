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

const newRoutes = require('./routes/new');
const voteRoutes = require('./routes/vote');
const adminRoutes = require('./routes/admin');

app.use('/new', newRoutes);
app.use('/vote', voteRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
