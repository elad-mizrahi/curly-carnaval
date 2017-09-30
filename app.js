const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const errorHandlers = require('./middlewares/errorHandlers');

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

const uploadRoute = require('./routes/api/upload');
app.use('/api/upload', uploadRoute);

// catch 404 and forward to error handler
app.use(errorHandlers.handle404);

// error handler
app.use(errorHandlers.errHandler);


const port = app.get('port') || 3000;
app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `App is running on: http://localhost:${port}`);
});
