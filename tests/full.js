const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Full of 7 and 2", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("7", "D"),
    card("7", "S"),
    card("2", "D"),
    card("7", "H"),
    card("2", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 32, rank: "7", kickers: ["2"] });
});

test("Full of 2 and 7", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("7", "D"),
    card("2", "S"),
    card("2", "D"),
    card("7", "H"),
    card("2", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 32, rank: "2", kickers: ["7"] });
});

test("Full of 3 and A", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "D"),
    card("3", "S"),
    card("A", "D"),
    card("3", "H"),
    card("A", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 32, rank: "3", kickers: ["A"] });
});
