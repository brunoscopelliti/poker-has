
'use strict';

const rank = require('./rank');
const cardsRank = require('./rank-cards');
const byRank = require('./utils/group-by-rank');

/*
 * Determine if the player's best point is a pair.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasPair([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'Q', type:'D'}, {rank:'9', type:'C'}])
 *
 * < output:
 * { strength: 1, rank: 'Q', kickers: ['9', '4', '2'] }
 */
exports = module.exports = function hasPair(cards) {

  const groupedCards = byRank(cards);

  if (Object.keys(groupedCards).length != 4){
    return false;
  }

  let result = { strength: rank.get('pair') };

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 2){
        result.rank = k;
        delete groupedCards[k];
      }
    }
  }

  result.kickers = Object.keys(groupedCards).sort((a,b) => cardsRank.indexOf(b)-cardsRank.indexOf(a));

  return result;

};
