const charactersRouter = require('express').Router();

const {
  getCurrentCharacter,
  updateCharacter,
  getAllCharacters,
  payCharacter,
  useAbility,
} = require('../controllers/characters');

charactersRouter.get('/', getAllCharacters);
charactersRouter.get('/me', getCurrentCharacter);
charactersRouter.patch('/me', updateCharacter);
charactersRouter.post('/pay/:id', payCharacter);
charactersRouter.patch('/ability', useAbility);

module.exports = charactersRouter;
