
/*
 * Group the cards into an object by rank.
 * The card rank is used as object key, and the value is the number of times the rank appears.
 *
 * @example
 *  input >
 *  [
 *    {rank:'2', type:'H'},
 *    {rank:'4', type:'H'},
 *    {rank:'Q', type:'S'},
 *    {rank:'Q', type:'D'},
 *    {rank:'9', type:'C'}
 *  ]
 *
 * < output:
 * { '2': 1, '4': 1, '9': 1, 'Q': 2 }
 */
exports = module.exports = function groupByRank(cards) {
  return cards.reduce(function(obj, card) {
    obj[card.rank] = typeof obj[card.rank] == "undefined" ? 1 : obj[card.rank] + 1;
    return obj;
  }, {});
};
