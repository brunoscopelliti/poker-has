
'use strict';

const rank = require('./domain/rank');
const straightType = require('./domain/straight-type');

const sortByRank = require('./utils/sort-by-rank');
const groupByType = require('./utils/group-by-type');
const hasHoles = require('./utils/has-holes');
const hasAceStraight = require('./utils/has-ace-straight');


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

  let groupedCards = groupByType(cards);

  if (Object.keys(groupedCards).length == 1){
    return false;
  }

  let sortedRanks = sortByRank(cards.map(card => card.rank));

  let straightRank;

  if (hasAceStraight(sortedRanks, straightType.low)){
    straightRank = '5';
  }
  else if (hasAceStraight(sortedRanks, straightType.high)){
    straightRank = 'A';
  }
  else if (!hasHoles(sortedRanks)){
    straightRank = sortedRanks[0];
  }
  else{
    return false;
  }

  return { strength: rank.get('straight'), rank: straightRank, kickers: [] };

};
