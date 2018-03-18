const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Flush C rank A", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("10", "C"),
    card("K", "C"),
    card("A", "C"),
    card("J", "C"),
    card("5", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 16, rank: "A", kickers: ["K", "J", "10", "5"] });
});

test("Flush H rank Q", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("4", "H"),
    card("Q", "H"),
    card("7", "H"),
    card("9", "H"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 16, rank: "Q", kickers: ["9", "7", "4", "2"] });
});

test("Flush D rank 8", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "D"),
    card("3", "D"),
    card("8", "D"),
    card("5", "D"),
    card("6", "D"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 16, rank: "8", kickers: ["6", "5", "3", "2"] });
});

test("Flush S rank K", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("9", "S"),
    card("K", "S"),
    card("J", "S"),
    card("Q", "S"),
    card("2", "S"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 16, rank: "K", kickers: ["Q", "J", "9", "2"] });
});
