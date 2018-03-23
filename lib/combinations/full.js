const { pairOf, threeOfAKindOf } = require("../utils/rank");

const full =
  (cards) => ({
    name: "Full House",
    kickers: [pairOf(cards)],
    rank: threeOfAKindOf(cards),
    strength: 6,
  });

module.exports = full;
