const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("High card is A", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("A", "H"),
    card("4", "H"),
    card("J", "S"),
    card("Q", "D"),
    card("9", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "A", kickers: ["Q", "J", "9", "4"] });
});

test("High card is A / 2", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("J", "H"),
    card("2", "S"),
    card("A", "H"),
    card("K", "D"),
    card("10", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "A", kickers: ["K", "J", "10", "2"] });
});

test("High card is Q", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("4", "H"),
    card("J", "S"),
    card("Q", "D"),
    card("9", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "Q", kickers: ["J", "9", "4", "2"] });
});

test("Almost straight", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("9", "S"),
    card("2", "H"),
    card("J", "D"),
    card("10", "H"),
    card("Q", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "Q", kickers: ["J", "10", "9", "2"] });
});

test("Almost flush", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("2", "H"),
    card("J", "H"),
    card("A", "H"),
    card("Q", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "A", kickers: ["Q", "J", "3", "2"] });
});
