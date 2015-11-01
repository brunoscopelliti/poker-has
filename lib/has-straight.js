
'use strict';

const rank = require('./rank');
const cardsRank = require('./rank-cards');

const sortByRank = require('./utils/sort-by-rank');
const groupByType = require('./utils/group-by-type');

const straightLow = ['A', '5', '4', '3', '2'];
const straightHigh = ['A', 'K', 'Q', 'J', '10'];

function getRankValue_(rank){
  return cardsRank.indexOf(rank);
}

function hasHole_(ranks){
  for (let i=0; i<=ranks.length; i++){
    if (ranks[i+1] && getRankValue_(ranks[i]) - getRankValue_(ranks[i+1]) > 1){
      return true;
    }
  }
  return false;
}

function hasStraightWithAce_(ranks, type){
  let refer = type == 'low' ? straightLow : straightHigh;
  for (let i=0; i<=ranks.length; i++){
    if (ranks[i] != refer[i]){
      return false;
    }
  }
  return true;
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

  let groupedCards = groupByType(cards);

  if (Object.keys(groupedCards).length == 1){
    return false;
  }

  let sortedRanks = sortByRank(cards.map(card => card.rank));

  let straightRank;

  if (hasStraightWithAce_(sortedRanks, 'low')){
    straightRank = '5';
  }
  else if (hasStraightWithAce_(sortedRanks, 'high')){
    straightRank = 'A';
  }
  else if (!hasHole_(sortedRanks)){
    straightRank = sortedRanks[0];
  }
  else{
    return false;
  }

  return { strength: rank.get('straight'), rank: straightRank, kickers: [] };

};
