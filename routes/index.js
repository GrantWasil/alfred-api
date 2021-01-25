const routes = require('express').Router();
const charactersRouter = require('./characters');
const auth = require('../middlewares/auth');
const { loginCharacter, createCharacter } = require('../controllers/characters');

routes.post('/signin', loginCharacter);
routes.post('/create', createCharacter);

routes.use(auth);
routes.use('/characters', charactersRouter);

module.exports = routes;
