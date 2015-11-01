
'use strict';

const rank = require('./domain/rank');

const groupByRank = require('./utils/group-by-rank');

/*
 * Determine if the player's best point is a full house.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasFullHouse([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'2', type:'S'}, {rank:'4', type:'D'}, {rank:'4', type:'C'}])
 *
 * < output:
 * { strength: 32, rank: '4', kickers: ['2'] }
 */
exports = module.exports = function hasFullHouse(cards) {

  const groupedCards = groupByRank(cards);

  if (Object.keys(groupedCards).length != 2){
    return false;
  }

  let result = { strength: rank.get('full-house') };

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 3){
        result.rank = k;
        delete groupedCards[k];
      }
    }
  }

  if (typeof result.rank == 'undefined'){
    return false;
  }

  result.kickers = Object.keys(groupedCards);

  return result;

};
