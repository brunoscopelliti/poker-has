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
    card("9", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "A", kickers: ["Q", "J", "9", "4"] });
});

test("High card is Q", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("4", "H"),
    card("J", "S"),
    card("Q", "D"),
    card("9", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 0, rank: "Q", kickers: ["J", "9", "4", "2"] });
});
