// eslint-disable-next-line global-require
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('cors');
const routes = require('./routes');
const limiter = require('./utils/rateLimiter');
const { DATABASE_ADDRESS, PORT } = require('./utils/constants');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DATABASE_ADDRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', routes);
app.use(errors());
app.use(errorHandler);

app.listen(3000 || PORT);
