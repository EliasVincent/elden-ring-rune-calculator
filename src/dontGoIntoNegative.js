import { goldenRune1, goldenRune2, goldenRune3, goldenRune4, goldenRune5, goldenRune6, goldenRune7, goldenRune8, goldenRune9, goldenRune10, goldenRune11, goldenRune12, goldenRune13, numensRune, herosRune1, herosRune2, herosRune3, herosRune4, herosRune5, lordsRune } from "./App";

// Uhh there's a better way to do this, but I'm lazy
export function dontGoIntoNegative(goldenRune1Counter, setGoldenRune1Counter, addRunes, goldenRune2Counter, setGoldenRune2Counter, goldenRune3Counter, setGoldenRune3Counter, goldenRune4Counter, setGoldenRune4Counter, goldenRune5Counter, setGoldenRune5Counter, goldenRune6Counter, setGoldenRune6Counter, goldenRune7Counter, setGoldenRune7Counter, goldenRune8Counter, setGoldenRune8Counter, goldenRune9Counter, setGoldenRune9Counter, goldenRune10Counter, setGoldenRune10Counter, goldenRune11Counter, setGoldenRune11Counter, goldenRune12Counter, setGoldenRune12Counter, goldenRune13Counter, setGoldenRune13Counter, numensRuneCounter, setNumensRuneCounter, herosRune1Counter, setHerosRune1Counter, herosRune2Counter, setHerosRune2Counter, herosRune3Counter, setHerosRune3Counter, herosRune4Counter, setHerosRune4Counter, herosRune5Counter, setHerosRune5Counter, lordsRuneCounter, setLordsRuneCounter) {
  if (goldenRune1Counter < 0) {
    setGoldenRune1Counter(0);
    addRunes(goldenRune1);
  }

  if (goldenRune2Counter < 0) {
    setGoldenRune2Counter(0);
    addRunes(goldenRune2);
  }

  if (goldenRune3Counter < 0) {
    setGoldenRune3Counter(0);
    addRunes(goldenRune3);
  }

  if (goldenRune4Counter < 0) {
    setGoldenRune4Counter(0);
    addRunes(goldenRune4);
  }

  if (goldenRune5Counter < 0) {
    setGoldenRune5Counter(0);
    addRunes(goldenRune5);
  }

  if (goldenRune6Counter < 0) {
    setGoldenRune6Counter(0);
    addRunes(goldenRune6);
  }

  if (goldenRune7Counter < 0) {
    setGoldenRune7Counter(0);
    addRunes(goldenRune7);
  }

  if (goldenRune8Counter < 0) {
    setGoldenRune8Counter(0);
    addRunes(goldenRune8);
  }

  if (goldenRune9Counter < 0) {
    setGoldenRune9Counter(0);
    addRunes(goldenRune9);
  }

  if (goldenRune10Counter < 0) {
    setGoldenRune10Counter(0);
    addRunes(goldenRune10);
  }

  if (goldenRune11Counter < 0) {
    setGoldenRune11Counter(0);
    addRunes(goldenRune11);
  }

  if (goldenRune12Counter < 0) {
    setGoldenRune12Counter(0);
    addRunes(goldenRune12);
  }

  if (goldenRune13Counter < 0) {
    setGoldenRune13Counter(0);
    addRunes(goldenRune13);
  }

  if (numensRuneCounter < 0) {
    setNumensRuneCounter(0);
    addRunes(numensRune);
  }

  if (herosRune1Counter < 0) {
    setHerosRune1Counter(0);
    addRunes(herosRune1);
  }

  if (herosRune2Counter < 0) {
    setHerosRune2Counter(0);
    addRunes(herosRune2);
  }

  if (herosRune3Counter < 0) {
    setHerosRune3Counter(0);
    addRunes(herosRune3);
  }

  if (herosRune4Counter < 0) {
    setHerosRune4Counter(0);
    addRunes(herosRune4);
  }

  if (herosRune5Counter < 0) {
    setHerosRune5Counter(0);
    addRunes(herosRune5);
  }

  if (lordsRuneCounter < 0) {
    setLordsRuneCounter(0);
    addRunes(lordsRune);
  }
}
