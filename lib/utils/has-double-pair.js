const R = require("ramda");

const { doublePairOf } = require("./rank");

const hasDoublePair = R.compose(
  R.equals(2),
  R.length,
  doublePairOf
);

module.exports = hasDoublePair;
