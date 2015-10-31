
'use strict';

const rank = require('./rank');
const byRank = require('./utils/group-by-rank');

/*
 * Determine if the player's best point is a pair.
 * In this case return an object that describes the point (strength, rank),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasPair([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'Q', type:'D'}, {rank:'9', type:'C'}])
 *
 * < output:
 * { strength: 1, rank: 'Q' }
 */
exports = module.exports = function hasPair(cards) {

  const groupedCards = byRank(cards);

  if (Object.keys(groupedCards).length != 4){
    return false;
  }

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 2){
        return { strength: rank.get('pair'), rank: k };
      }
    }
  }

};
