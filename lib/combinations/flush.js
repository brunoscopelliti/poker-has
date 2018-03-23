const R = require("ramda");

const { kickers } = require("../utils/rank");

const flush =
  (cards) => {
    const ranks = kickers(cards);

    return {
      name: "Flush",
      kickers: R.tail(ranks),
      rank: R.head(ranks),
      strength: 5,
    };
  };

module.exports = flush;
