const { kickers, threeOfAKindOf } = require("../utils/rank");

const threeOfAKind =
  (cards) => ({
    name: "Three of a kind",
    kickers: kickers(cards),
    rank: threeOfAKindOf(cards),
    strength: 3,
  });

module.exports = threeOfAKind;
