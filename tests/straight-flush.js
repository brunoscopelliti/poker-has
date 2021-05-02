"use strict";

const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Straight Flush rank 9", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("6", "H"),
    card("7", "H"),
    card("9", "H"),
    card("8", "H"),
    card("5", "H"),
  ]);

  t.strictSame(has(cards), { name: "Straight Flush", strength: 8, rank: "9", kickers: [] });
});

test("Straight Flush rank 6", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("6", "C"),
    card("2", "C"),
    card("3", "C"),
    card("5", "C"),
    card("4", "C"),
  ]);

  t.strictSame(has(cards), { name: "Straight Flush", strength: 8, rank: "6", kickers: [] });
});

test("Straight Flush rank 10", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("10", "C"),
    card("7", "C"),
    card("8", "C"),
    card("9", "C"),
    card("6", "C"),
  ]);

  t.strictSame(has(cards), { name: "Straight Flush", strength: 8, rank: "10", kickers: [] });
});

test("Straight Flush of A Low", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "D"),
    card("4", "D"),
    card("2", "D"),
    card("5", "D"),
    card("A", "D"),
  ]);

  t.strictSame(has(cards), { name: "Straight Flush", strength: 8, rank: "5", kickers: [] });
});
