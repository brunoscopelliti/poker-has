
'use strict';

const rank = require('./domain/rank');

const sortByRank = require('./utils/sort-by-rank');

/*
 * Determine what is the player's stronger card.
 * It does not mean that the player hasn't a stronger point than highest-card
 *
 * @example
 * input >
 *  hasHighestCard([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'6', type:'D'}, {rank:'9', type:'C'}])
 *
 * < output:
 * { strength: 0, rank: 'Q', kickers: ['9', '6', '4', '2'] }
 */
exports = module.exports = function hasHighestCard(cards) {

  let sortedCards = sortByRank(cards);
  let bestCard = sortedCards.shift();

  return { strength: rank.get('highest-card'), rank: bestCard.rank, kickers: sortedCards.map(card => card.rank) };

};
