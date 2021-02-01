const charactersRouter = require('express').Router();

const {
  getCurrentCharacter,
  updateCharacter,
  getAllCharacters,
} = require('../controllers/characters');

charactersRouter.get('/', getAllCharacters);
charactersRouter.get('/me', getCurrentCharacter);
charactersRouter.patch('/me', updateCharacter);

module.exports = charactersRouter;
