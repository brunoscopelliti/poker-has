
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

  let fullhouseRank;

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 3){
        fullhouseRank = k;
        delete groupedCards[k];
      }
    }
  }

  if (typeof fullhouseRank == 'undefined'){
    return false;
  }

  return { strength: rank.get('full-house'), rank: fullhouseRank, kickers: Object.keys(groupedCards) };

};
