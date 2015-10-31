
const tape = require('tape');
const tcase = require('tape-case');

const m = require('../index.js');

const rank_A = [
  {rank:'A', type:'H'},
  {rank:'4', type:'H'},
  {rank:'J', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
];

const pair_of_Q = [
  {rank:'2', type:'H'},
  {rank:'4', type:'H'},
  {rank:'Q', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
];

const pair_of_3 = [
  {rank:'3', type:'H'},
  {rank:'4', type:'H'},
  {rank:'3', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}

];

const doublePair_of_9 = [
  {rank:'3', type:'H'},
  {rank:'9', type:'H'},
  {rank:'3', type:'S'},
  {rank:'9', type:'D'},
  {rank:'A', type:'C'}
];

const threeOfAKind_of_J = [
  {rank:'J', type:'H'},
  {rank:'9', type:'D'},
  {rank:'J', type:'S'},
  {rank:'J', type:'C'},
  {rank:'5', type:'C'}
];

const poker_of_A = [
  {rank:'A', type:'H'},
  {rank:'9', type:'D'},
  {rank:'A', type:'S'},
  {rank:'A', type:'C'},
  {rank:'A', type:'D'}
];








tape('poker-has:', function(t) { t.end(); });

tape('check interface', function(t) {

  t.equal(typeof m.hasPair, 'function', 'has-pair is a function');

  t.end();

});


tcase([
  { description: 'has-pair', args: [rank_A], result: false },
  { args: [pair_of_Q], result: { strength: 1, rank: 'Q' } },
  { args: [pair_of_3], result: { strength: 1, rank: '3' } },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: false },
  { args: [poker_of_A], result: false }
], function(cards) {

  return m.hasPair(cards);

});
