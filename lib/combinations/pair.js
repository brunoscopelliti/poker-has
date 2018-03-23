const { kickers, pairOf } = require("../utils/rank");

const pair =
  (cards) => ({
    // name: "Pair",
    kickers: kickers(cards),
    rank: pairOf(cards),
    strength: 1,
  });

module.exports = pair;
