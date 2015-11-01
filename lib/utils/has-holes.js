
'use strict';

const cardsRank = require('../domain/rank-cards');

function getRankValue_(rank){
  return cardsRank.indexOf(rank);
}

/*
 * Determine if the sequence is continuous or has holes.
 * The list of ranks accepted as argument must be sorted.
 *
 * @example
 *  input >
 *  ['9', '7', '4', '3', '2']
 *
 * < output:
 * true
 */
exports = module.exports = function hasHole(sortedRanks){
  for (let i=0; i<=sortedRanks.length; i++){
    if (sortedRanks[i+1] && getRankValue_(sortedRanks[i]) - getRankValue_(sortedRanks[i+1]) > 1){
      return true;
    }
  }
  return false;
}
