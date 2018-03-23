const R = require("ramda");

const { pairOf } = require("./rank");

const hasPair = R.compose(
  R.not,
  R.equals(void 0),
  pairOf
);

module.exports = hasPair;
