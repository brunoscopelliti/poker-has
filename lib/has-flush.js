
'use strict';

const rank = require('./domain/rank');
const straightType = require('./domain/straight-type');

const sortByRank = require('./utils/sort-by-rank');
const groupByType = require('./utils/group-by-type');
const hasHoles = require('./utils/has-holes');
const hasAceStraight = require('./utils/has-ace-straight');

/*
 * Determine if the player's best point is a flush.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasFlush([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'H'}, {rank:'J', type:'H'}, {rank:'9', type:'H'}])
 *
 * < output:
 * { strength: 16, rank: 'Q', kickers: ['J', '9', '4', '2'] }
 */
exports = module.exports = function hasFlush(cards) {

  const groupedCards = groupByType(cards);

  if (Object.keys(groupedCards).length != 1){
    return false;
  }

  // exclude greater points (such straight-flush)

  const sortedCards = sortByRank(cards);

  if (!hasHoles(sortedCards) || hasAceStraight(sortedCards, straightType.low)){
    return false;
  }

  const bestCard = sortedCards.shift();

  return { strength: rank.get('flush'), rank: bestCard.rank, kickers: sortedCards.map(card => card.rank) };

};
