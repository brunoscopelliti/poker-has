const { kickers, pokerOf } = require("../utils/rank");

const poker =
  (cards) => ({
    // name: "Poker",
    kickers: kickers(cards),
    rank: pokerOf(cards),
    strength: 64,
  });

module.exports = poker;
