
'use strict';

const rank = require('./domain/rank');

const groupByRank = require('./utils/group-by-rank');

/*
 * Determine if the player's best point is a poker.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasFullHouse([{rank:'4', type:'S'}, {rank:'4', type:'H'}, {rank:'7', type:'S'}, {rank:'4', type:'D'}, {rank:'4', type:'C'}])
 *
 * < output:
 * { strength: 32, rank: '4', kickers: ['7'] }
 */
exports = module.exports = function hasPoker(cards) {

  const groupedCards = groupByRank(cards);

  if (Object.keys(groupedCards).length != 2){
    return false;
  }

  let pokerRank;

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 4){
        pokerRank = k;
        delete groupedCards[k];
      }
    }
  }

  if (typeof pokerRank == 'undefined'){
    return false;
  }

  return { strength: rank.get('poker'), rank: pokerRank, kickers: Object.keys(groupedCards) };

};
