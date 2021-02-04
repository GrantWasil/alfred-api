const charactersRouter = require('express').Router();

const {
  getCurrentCharacter,
  updateCharacter,
  getAllCharacters,
  payCharacter,
} = require('../controllers/characters');

charactersRouter.get('/', getAllCharacters);
charactersRouter.get('/me', getCurrentCharacter);
charactersRouter.patch('/me', updateCharacter);
charactersRouter.post('/pay/:id', payCharacter);

module.exports = charactersRouter;
