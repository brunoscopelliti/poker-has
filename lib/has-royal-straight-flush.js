
'use strict';

const rank = require('./domain/rank');
const straightType = require('./domain/straight-type');

const sortByRank = require('./utils/sort-by-rank');
const groupByType = require('./utils/group-by-type');
const hasHoles = require('./utils/has-holes');
const hasAceStraight = require('./utils/has-ace-straight');


function hasFlush_(cards){
  return Object.keys(groupByType(cards)).length == 1;
}

/*
 * Determine if the player's best point is a royal straight flush.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasStraight([{rank:'K', type:'H'}, {rank:'J', type:'H'}, {rank:'A', type:'H'}, {rank:'10', type:'H'}, {rank:'Q', type:'H'}])
 *
 * < output:
 * { strength: 256, rank: 'A', kickers: [] }
 */
exports = module.exports = function hasRoyalStraightFlush(cards) {

  if (!hasFlush_(cards)){
    return false;
  }

  const sortedCards = sortByRank(cards);

  if (!hasAceStraight(sortedCards, straightType.high)){
    return false;
  }

  return { strength: rank.get('royal-straight-flush'), rank: 'A', kickers: [] };

};
