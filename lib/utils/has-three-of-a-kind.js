const R = require("ramda");

const { threeOfAKindOf } = require("./rank");

const hasThreeOfAKind = R.compose(
  R.not,
  R.equals(void 0),
  threeOfAKindOf
);

module.exports = hasThreeOfAKind;
