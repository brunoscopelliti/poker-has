
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
 * Determine if the player's best point is a straight.
 * In this case return an object that describes the point (strength, rank, kickers),
 * otherwise return false.
 *
 * @example
 * input >
 *  hasStraight([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'3', type:'S'}, {rank:'5', type:'D'}, {rank:'6', type:'C'}])
 *
 * < output:
 * { strength: 8, rank: '6', kickers: [] }
 */
exports = module.exports = function hasStraight(cards) {

  // exclude greater points (such flush, straight-flush)

  if (hasFlush_(cards)){
    return false;
  }

  let straightRank;
  const sortedCards = sortByRank(cards);

  if (hasAceStraight(sortedCards, straightType.low)){
    straightRank = '5';
  }
  else if (hasAceStraight(sortedCards, straightType.high)){
    straightRank = 'A';
  }
  else if (!hasHoles(sortedCards)){
    straightRank = sortedCards[0].rank;
  }
  else{
    return false;
  }

  return { strength: rank.get('straight'), rank: straightRank, kickers: [] };

};
