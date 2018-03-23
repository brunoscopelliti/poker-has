const R = require("ramda");

const hasStraightBottomAce = R.compose(
  R.equals(["2", "3", "4", "5", "A"]),
  R.pluck("rank")
);

module.exports = hasStraightBottomAce;
