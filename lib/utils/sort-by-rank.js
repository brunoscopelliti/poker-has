
const cardsRank = require('../domain/rank-cards');

/*
 * Sort the cards by rank.
 * The order of sorting is from the highest rank to the lowest.
 *
 * @example
 *  input >
 *  ['2', 'Q', '7', '5', 'A']
 *
 * < output:
 * ['A', 'Q', '7', '5', '2']
 */
exports = module.exports = function sortByRank(ranks) {
  return ranks.sort((a,b) => cardsRank.indexOf(b)-cardsRank.indexOf(a));
};
