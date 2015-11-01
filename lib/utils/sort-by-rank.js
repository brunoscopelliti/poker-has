
'use strict';

const cardsRank = require('../domain/rank-cards');

/*
 * Sort the cards by rank.
 * The order of sorting is from the highest rank to the lowest.
 *
 * @example
 *  input >
 *  [
 *    {rank:'7', type:'H'},
 *    {rank:'9', type:'H'},
 *    {rank:'A', type:'S'},
 *    {rank:'2', type:'D'},
 *    {rank:'3', type:'C'}
 *  ]
 *
 * < output:
 *  [
 *    {rank:'A', type:'H'},
 *    {rank:'9', type:'H'},
 *    {rank:'7', type:'S'},
 *    {rank:'3', type:'D'},
 *    {rank:'2', type:'C'}
 *  ]
 */
exports = module.exports = function sortByRank(cards) {
  return cards.slice().sort((a,b) => cardsRank.indexOf(b.rank)-cardsRank.indexOf(a.rank));
};
