const { doublePairOf, kickers } = require("../utils/rank");

const doublePair =
  (cards) => {
    const [rank, kicker1] = doublePairOf(cards);
    const [kicker2] = kickers(cards);

    return {
      // name: "Double Pair",
      kickers: [kicker1, kicker2],
      rank: rank,
      strength: 2,
    };
  };

module.exports = doublePair;
