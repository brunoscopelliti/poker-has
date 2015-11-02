
'use strict';

const groupByType = require('./group-by-type');

/*
 * Determine if the cards in the sequence have all the same type.
 * As argument accepted a list of cards.
 *
 * @example
 *  input >
 *  [
 *    {rank:'A', type:'H'},
 *    {rank:'J', type:'H'},
 *    {rank:'4', type:'H'},
 *    {rank:'3', type:'H'},
 *    {rank:'2', type:'H'}
 *  ]
 *
 * < output:
 * true
 */
exports = module.exports = function hasSameType(cards){
  return Object.keys(groupByType(cards)).length == 1;
}
