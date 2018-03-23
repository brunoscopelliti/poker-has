const toRankValue = require("./to-rank-value");

const isFollowedByOnePointLowerCard =
  (card, position, cards) => {
    return typeof cards[position + 1] == "undefined" ||
      toRankValue(cards[position + 1].rank) - toRankValue(card.rank) === 1;
  };

const hasStraight =
  (cards) => cards.every(isFollowedByOnePointLowerCard);

module.exports = hasStraight;
