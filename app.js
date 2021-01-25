require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('cors');
const routes = require('./routes');
const limiter = require('./utils/rateLimiter');
const { DATABASE_ADDRESS } = require('./utils/constants');

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

app.listen(3000);