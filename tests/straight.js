"use strict";

const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Straight to 9", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("6", "H"),
    card("7", "D"),
    card("9", "S"),
    card("8", "C"),
    card("5", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Straight", strength: 4, rank: "9", kickers: [] });
});

test("Straight to 6", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("6", "H"),
    card("5", "D"),
    card("3", "S"),
    card("4", "C"),
    card("2", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Straight", strength: 4, rank: "6", kickers: [] });
});

test("Straight to 10", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("6", "H"),
    card("8", "D"),
    card("9", "S"),
    card("7", "C"),
    card("10", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Straight", strength: 4, rank: "10", kickers: [] });
});

test("Straight to A High", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("K", "H"),
    card("J", "D"),
    card("A", "S"),
    card("10", "C"),
    card("Q", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Straight", strength: 4, rank: "A", kickers: [] });
});

test("Straight to A Low", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("5", "D"),
    card("A", "S"),
    card("3", "C"),
    card("4", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Straight", strength: 4, rank: "5", kickers: [] });
});
