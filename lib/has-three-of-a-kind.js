
'use strict';

const rank = require('./domain/rank');

const groupByRank = require('./utils/group-by-rank');
const sortByRank = require('./utils/sort-by-rank');

/*
 * Determine if the player's best point is a three of a kind.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasThreeOfAKind([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'Q', type:'D'}, {rank:'Q', type:'C'}])
 *
 * < output:
 * { strength: 1, rank: 'Q', kickers: ['4', '2'] }
 */
exports = module.exports = function hasThreeOfAKind(cards) {

  const groupedCards = groupByRank(cards);

  if (Object.keys(groupedCards).length != 3){
    return false;
  }

  let threeOfAKindRank;

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 3){
        threeOfAKindRank = k;
        delete groupedCards[k];
      }
    }
  }

  if (typeof threeOfAKindRank == 'undefined'){
    return false;
  }

  return { strength: rank.get('three-of-a-kind'), rank: threeOfAKindRank, kickers: sortByRank(Object.keys(groupedCards)) };

};
