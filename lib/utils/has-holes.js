
'use strict';

const cardsRank = require('../domain/rank-cards');

function getRankValue_(card){
  return cardsRank.indexOf(card.rank);
}

/*
 * Determine if the sequence is continuous or has holes.
 * The list of cards accepted as argument must be sorted.
 *
 * @example
 *  input >
 *  [
 *    {rank:'A', type:'H'},
 *    {rank:'J', type:'H'},
 *    {rank:'4', type:'S'},
 *    {rank:'3', type:'D'},
 *    {rank:'2', type:'C'}
 *  ]
 *
 * < output:
 * true
 */
exports = module.exports = function hasHole(sortedCards){
  for (let i=0; i<sortedCards.length; i++){
    if (sortedCards[i+1] && getRankValue_(sortedCards[i]) - getRankValue_(sortedCards[i+1]) > 1){
      return true;
    }
  }
  return false;
}
