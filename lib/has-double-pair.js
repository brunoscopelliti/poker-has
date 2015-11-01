
'use strict';

const rank = require('./domain/rank');
const cardsRank = require('./domain/rank-cards');

const groupByRank = require('./utils/group-by-rank');

/*
 * Determine if the player's best point is a double pair.
 * In this case return an object that describes the point (strength, rank, kickers),
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

  const groupedCards = groupByRank(cards);

  if (Object.keys(groupedCards).length != 3){
    return false;
  }

  const doublePair = [];

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == 2){
        doublePair.push(k);
      }
    }
  }

  if (doublePair.length != 2){
    return false;
  }

  const firstPairRank = doublePair[0];
  const secondPairRank = doublePair[1];

  const kicker = cards.filter(card => doublePair.indexOf(card.rank) < 0).map(card => card.rank);

  const result = { strength: rank.get('double-pair') };

  if (cardsRank.indexOf(firstPairRank) > cardsRank.indexOf(firstPairRank)){
    result.rank = firstPairRank;
    result.kickers = [secondPairRank].concat(kicker);
  }
  else {
    result.rank = secondPairRank;
    result.kickers = [firstPairRank].concat(kicker);
  }

  return result;

};
