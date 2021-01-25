// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (err.name === 'MongoError' && err.code === 11000) {
    res.status(409).send({ message });
    return;
  }
  res.status(statusCode).send({ message: statusCode === 500 ? 'An error occured on the server' : message });
};
