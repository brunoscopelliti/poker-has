
'use strict';

const rank = require('./rank');
const cardsRank = require('./rank-cards');
const byRank = require('./utils/group-by-rank');

/*
 * Determine if the player's best point is a double pair.
 * In this case return an object that describes the point (strength, rank, secondaryRank),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasDoublePair([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'Q', type:'D'}, {rank:'2', type:'C'}])
 *
 * < output:
 * { strength: 2, rank: 'Q', kickers: ['2', '4'] }
 */
exports = module.exports = function hasDoublePair(cards) {

  const groupedCards = byRank(cards);

  if (Object.keys(groupedCards).length != 3){
    return false;
  }

  let doublePair = [];
  let kicker;

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 2){
        doublePair.push(k);
      }
      else if (groupedCards[k] == 1){
        kicker = k;
      }
    }
  }

  if (doublePair.length != 2){
    return false;
  }

  let result = { strength: rank.get('double-pair') };

  let firstPairRank = doublePair[0];
  let secondPairRank = doublePair[1];

  if (cardsRank.indexOf(firstPairRank) > cardsRank.indexOf(firstPairRank)){
    result.rank = firstPairRank;
    result.kickers = [secondPairRank, kicker];
  }
  else {
    result.rank = secondPairRank;
    result.kickers = [firstPairRank, kicker];
  }

  return result;

};
