
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
 * Determine if the player's best point is a straight flush.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasStraight([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'3', type:'H'}, {rank:'5', type:'H'}, {rank:'6', type:'H'}])
 *
 * < output:
 * { strength: 128, rank: '6', kickers: [] }
 */
exports = module.exports = function hasStraightFlush(cards) {

  if (!hasFlush_(cards)){
    return false;
  }

  const sortedCards = sortByRank(cards);

  if (hasAceStraight(sortedCards, straightType.high)){
    return false;
  }

  let straightRank;

  if (hasAceStraight(sortedCards, straightType.low)){
    straightRank = '5';
  }
  else if (!hasHoles(sortedCards)){
    straightRank = sortedCards[0].rank;
  }
  else{
    return false;
  }

  return { strength: rank.get('straight-flush'), rank: straightRank, kickers: [] };

};
