const charactersRouter = require('express').Router();

const {
  getCurrentCharacter,
  updateCharacter,
} = require('../controllers/characters');

charactersRouter.get('/me', getCurrentCharacter);
charactersRouter.patch('/me', updateCharacter);

module.exports = charactersRouter;
