const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('cors');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const routes = require('./routes');
const limiter = require('./utils/rateLimiter');
const { DATABASE_ADDRESS, PORT } = require('./utils/constants');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', (socket) => {
  socket.emit('status', true);

  socket.on('gameMode', (mode) => {
    io.emit('gameMode', mode);
  });

  socket.on('payment', ({ amount, sender, receiver }) => {
    io.emit('payment', { amount, sender, receiver });
  });

  socket.on('ability', ({ ability, sender, receiver }) => {
    io.emit('ability', { ability, sender, receiver });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

mongoose.connect(DATABASE_ADDRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/api', routes);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

app.use(errors());
app.use(errorHandler);

server.listen(PORT || 3001);
