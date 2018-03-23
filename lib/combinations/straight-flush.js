const { straightOf } = require("../utils/rank");

const straightFlush =
  (cards) => ({
    name: "Straight Flush",
    kickers: [],
    rank: straightOf(cards),
    strength: 8,
  });

module.exports = straightFlush;
