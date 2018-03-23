const R = require("ramda");

const { kickers } = require("../utils/rank");

const cardHigh =
  (cards) => {
    const ranks = kickers(cards);

    return {
      // name: "Card High",
      kickers: R.tail(ranks),
      rank: R.head(ranks),
      strength: 0,
    };
  };

module.exports = cardHigh;
