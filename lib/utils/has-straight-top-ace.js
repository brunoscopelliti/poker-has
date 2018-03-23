const R = require("ramda");

const hasStraightTopAce = R.compose(
  R.equals(["10", "J", "Q", "K", "A"]),
  R.pluck("rank")
);

module.exports = hasStraightTopAce;
