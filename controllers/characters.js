const jwt = require('jsonwebtoken');
const Character = require('../models/character');
const { NODE_ENV, JWT_SECRET } = require('../utils/constants');

module.exports.loginCharacter = (req, res, next) => {
  const { keyword } = req.body;
  return Character.findOne(keyword)
    .then((character) => {
      const token = jwt.sign({ _id: character._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.status(200).send({ token });
    })
    .catch(() => next(new Error('Character not found')));
};

module.exports.getCurrentCharacter = (req, res, next) => {
  Character.findById(req.character._id)
    .then((character) => {
      res.status(200).send({ character });
    })
    .catch(() => next(new Error('Not found')));
};

module.exports.createCharacter = (req, res, next) => {
  const {
    keyword,
    name,
    traits,
    bio,
    goals,
    others,
    items,
    tips,
    abilities,
    secret,
    clue,
    active,
  } = req.body;

  Character.create({
    keyword,
    name,
    traits,
    bio,
    goals,
    others,
    items,
    tips,
    abilities,
    secret,
    clue,
    active,
  })
    .then((character) => {
      res.status(201).send({ character });
    })
    .catch(() => next(new Error('Invalid Data')));
};

module.exports.updateCharacter = (req, res, next) => {
  const {
    keyword,
    name,
    traits,
    bio,
    goals,
    others,
    items,
    tips,
    abilities,
    secret,
    clue,
    active,
  } = req.body;

  Character.findOneAndUpdate(keyword, {
    keyword,
    name,
    traits,
    bio,
    goals,
    others,
    items,
    tips,
    abilities,
    secret,
    clue,
    active,
  })
    .then((character) => {
      res.status(204).send({ character });
    })
    .catch(() => next(new Error('Invalid Data')));
};