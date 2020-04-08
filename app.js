const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const itemRouter = require('./router/api/itemRouter');

const app = express();

// MIDDLEWARE
//@morgan
app.use(morgan('dev'));

//@bodyparser
app.use(bodyParser.json({}));

// ROUTER
app.use('/api/items/', itemRouter);

//serve static assets if in productions
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
