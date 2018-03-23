const { straightOf } = require("../utils/rank");

const straight =
  (cards) => ({
    name: "Straight",
    kickers: [],
    rank: straightOf(cards),
    strength: 4,
  });

module.exports = straight;
