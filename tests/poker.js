const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Poker of A", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("A", "H"),
    card("9", "D"),
    card("A", "S"),
    card("A", "C"),
    card("A", "D"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 64, rank: "A", kickers: ["9"] });
});

test("Poker of 3", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("4", "D"),
    card("3", "S"),
    card("3", "C"),
    card("3", "D"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 64, rank: "3", kickers: ["4"] });
});
