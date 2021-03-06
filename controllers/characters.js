const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Character = require('../models/character');
const { NODE_ENV, JWT_SECRET } = require('../utils/constants');

module.exports.loginCharacter = (req, res, next) => {
  const { keyword } = req.body;
  return Character.findOne({ keyword })
    .then((character) => {
      const token = jwt.sign(
        { _id: character._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '14d' },
      );
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
    preview,
    money,
  } = req.body.data;

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
    preview,
    money,
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
    preview,
    money,
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
    preview,
    money,
  })
    .then((character) => {
      res.status(204).send({ character });
    })
    .catch(() => next(new Error('Invalid Data')));
};

module.exports.getAllCharacters = (req, res, next) => {
  Character.find({})
    .select(
      '-keyword -traits -preview -bio -goals -others -items -tips -abilities -secret -clue -money -active',
    )
    .sort('name')
    .then((characters) => {
      res.status(200).send({ characters });
    })
    .catch(() => next(new Error('Not Found')));
};

async function payCharacter(req, res) {
  const sender = req.character._id;
  const { amount } = req.body;
  const receiver = req.params.id;
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const opts = { session, new: true };
    const A = await Character.findByIdAndUpdate(
      sender,
      { $inc: { money: -amount } },
      opts,
    );
    if (A.money < 0) {
      throw new Error(`Insufficient funds: ${A.money + amount}`);
    }

    const B = await Character.findByIdAndUpdate(
      receiver,
      { $inc: { money: amount } },
      opts,
    );

    await session.commitTransaction();
    session.endSession();
    res.status(200).send(A);
    return { from: A, to: B };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).send(error.message);
    throw error;
  }
}

module.exports.useAbility = (req, res) => {
  const user = req.character._id;
  const { ability } = req.body;
  Character.findByIdAndUpdate(
    { _id: user },
    { $inc: { 'abilities.$[el].uses': -1 } },
    {
      arrayFilters: [{ 'el.name': ability }],
      new: true,
    },
  )
    .then((character) => {
      res.status(200).send(character);
    })
    .catch((err) => res.status(500).send(err.message));
};

module.exports.payCharacter = payCharacter;
