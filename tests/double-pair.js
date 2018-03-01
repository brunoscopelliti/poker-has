const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Double Pair of 9 and 3 / 1", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("9", "H"),
    card("3", "S"),
    card("9", "D"),
    card("A", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 2, rank: "9", kickers: ["3", "A"] });
});

test("Double Pair of 9 and 3 / 2", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("9", "H"),
    card("3", "S"),
    card("9", "D"),
    card("2", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 2, rank: "9", kickers: ["3", "2"] });
});

test("Double Pair issue#1", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("K", "H"),
    card("K", "D"),
    card("Q", "S"),
    card("Q", "C"),
    card("5", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 2, rank: "K", kickers: ["Q", "5"] });
});
