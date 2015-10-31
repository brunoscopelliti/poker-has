
/*
 * Group the cards into an object by type.
 * The card type is used as object key, and the value is the number of times the type appears.
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
 * { 'H': 2, 'S': 1, 'D': 1, 'C': 1 }
 */
exports = module.exports = function groupByType(cards) {
  return cards.reduce(function(obj, card) {
    obj[card.type] = typeof obj[card.type] == "undefined" ? 1 : obj[card.type] + 1;
    return obj;
  }, {});
};
