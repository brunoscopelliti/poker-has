const { straightOf } = require("../utils/rank");

const straight =
  (cards) => ({
    // name: "Straight",
    kickers: [],
    rank: straightOf(cards),
    strength: 8,
  });

module.exports = straight;
