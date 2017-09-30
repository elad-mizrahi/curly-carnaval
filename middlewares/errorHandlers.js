const express = require('express');
const app = express();

const errHandler = (err, req, res, next) => {
  const dev = app.get('env');
  const status = err.status || 500;
  if (dev === 'test') {
    res.status('404').json({});
  }
  if (dev === 'development') {
    res.status(status).json({
      error: {
        message: err.message
      }
    });
    console.log(err);
  } else {
    res.status(status).json({
      error: 500
    });
    console.log(err);
  }
}

// catch 404 and forward to error handler
const handle404 = (req, res, next) => {
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
};


module.exports = {
  errHandler, 
  handle404
};