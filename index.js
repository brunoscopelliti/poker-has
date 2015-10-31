
'use strict';

var hasHighestCard = require('./lib/has-highest-card');
var hasPair = require('./lib/has-pair');
var hasDoublePair = require('./lib/has-double-pair');
var hasThreeOfAKind = require('./lib/has-three-of-a-kind');
var hasStraight = require('./lib/has-straight');
var hasFlush = require('./lib/has-flush');
var hasFullHouse = require('./lib/has-full-house');
var hasPoker = require('./lib/has-Poker');
var hasStraightFlush = require('./lib/has-straight-flush');
var hasRoyalStraightFlush = require('./lib/has-royal-straight-flush');


exports = module.exports = {

  hasHighestCard: hasHighestCard,

  hasPair: hasPair,

  hasDoublePair: hasDoublePair,

  hasThreeOfAKind: hasThreeOfAKind,

  hasStraight: hasStraight,

  hasFlush: hasFlush,

  hasFullHouse: hasFullHouse,

  hasPoker: hasPoker,

  hasStraightFlush: hasStraightFlush,

  hasRoyalStraightFlush: hasRoyalStraightFlush

};
