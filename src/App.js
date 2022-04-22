import "./App.css";
import React from "react";
import Rune from "./Rune";
// import images
import goldenRune1Img from "../src/images/golden_rune_1_elden_ring_wiki_guide_200px.png";
import goldenRune2Img from "../src/images/golden_rune_2_elden_ring_wiki_guide_200px.png";
import goldenRune3Img from "../src/images/golden_rune_3_elden_ring_wiki_guide_200px.png";
import goldenRune4Img from "../src/images/golden_rune_4_elden_ring_wiki_guide_200px.png";
import goldenRune5Img from "../src/images/golden_rune_5_elden_ring_wiki_guide_200px.png";
import goldenRune6Img from "../src/images/golden_rune_6_elden_ring_wiki_guide_200px.png";
import goldenRune7Img from "../src/images/golden_rune_7_elden_ring_wiki_guide_200px.png";
import goldenRune8Img from "../src/images/golden_rune_8_elden_ring_wiki_guide_200px.png";
import goldenRune9Img from "../src/images/golden_rune_9_elden_ring_wiki_guide_200px.png";
import goldenRune10Img from "../src/images/golden_rune_10_elden_ring_wiki_guide_200px.png";
import goldenRune12Img from "../src/images/golden_rune_12_elden_ring_wiki_guide_200px.png";
import herosRune1Img from "../src/images/heros-rune-1-consumable-elden-ring-wiki-guide.png";
import herosRune4Img from "../src/images/heros-rune-4-consumable-elden-ring-wiki-guide.png";
import herosRune5Img from "../src/images/heros-rune-5-consumable-elden-ring-wiki-guide.png";
import lordsRuneImg from "../src/images/lords-rune-tools-elden-ring-wiki-guide.png";
import { dontGoIntoNegative } from "./dontGoIntoNegative";

const goldenRune11Img = goldenRune10Img
const goldenRune13Img = goldenRune12Img

export const goldenRune1 = 200;
export const goldenRune2 = 400;
export const goldenRune3 = 800;
export const goldenRune4 = 1200;
export const goldenRune5 = 1600;
export const goldenRune6 = 2000;
export const goldenRune7 = 2500;
export const goldenRune8 = 3000;
export const goldenRune9 = 3800;
export const goldenRune10 = 5000;
export const goldenRune11 = 6250;
export const goldenRune12 = 7500;
export const goldenRune13 = 10000;
export const numensRune = 12500;
export const herosRune1 = 15000;
export const herosRune2 = 20000;
export const herosRune3 = 25000;
export const herosRune4 = 30000;
export const herosRune5 = 35000;
export const lordsRune = 50000;

function App() {
  // state number
  const [runes, setRunes] = React.useState(0);

  const addRunes = (runesToAdd) => {
    setRunes(runes + runesToAdd);
  };

  const subtractRunes = (runesToSubtract) => {
    // if runes are less than 0, set to 0
    setRunes(runes - runesToSubtract);
  };

  const [goldenRune1Counter, setGoldenRune1Counter] = React.useState(0);
  const [goldenRune2Counter, setGoldenRune2Counter] = React.useState(0);
  const [goldenRune3Counter, setGoldenRune3Counter] = React.useState(0);
  const [goldenRune4Counter, setGoldenRune4Counter] = React.useState(0);
  const [goldenRune5Counter, setGoldenRune5Counter] = React.useState(0);
  const [goldenRune6Counter, setGoldenRune6Counter] = React.useState(0);
  const [goldenRune7Counter, setGoldenRune7Counter] = React.useState(0);
  const [goldenRune8Counter, setGoldenRune8Counter] = React.useState(0);
  const [goldenRune9Counter, setGoldenRune9Counter] = React.useState(0);
  const [goldenRune10Counter, setGoldenRune10Counter] = React.useState(0);
  const [goldenRune11Counter, setGoldenRune11Counter] = React.useState(0);
  const [goldenRune12Counter, setGoldenRune12Counter] = React.useState(0);
  const [goldenRune13Counter, setGoldenRune13Counter] = React.useState(0);
  const [numensRuneCounter, setNumensRuneCounter] = React.useState(0);
  const [herosRune1Counter, setHerosRune1Counter] = React.useState(0);
  const [herosRune2Counter, setHerosRune2Counter] = React.useState(0);
  const [herosRune3Counter, setHerosRune3Counter] = React.useState(0);
  const [herosRune4Counter, setHerosRune4Counter] = React.useState(0);
  const [herosRune5Counter, setHerosRune5Counter] = React.useState(0);
  const [lordsRuneCounter, setLordsRuneCounter] = React.useState(0);

  dontGoIntoNegative(goldenRune1Counter, setGoldenRune1Counter, addRunes, goldenRune2Counter, setGoldenRune2Counter, goldenRune3Counter, setGoldenRune3Counter, goldenRune4Counter, setGoldenRune4Counter, goldenRune5Counter, setGoldenRune5Counter, goldenRune6Counter, setGoldenRune6Counter, goldenRune7Counter, setGoldenRune7Counter, goldenRune8Counter, setGoldenRune8Counter, goldenRune9Counter, setGoldenRune9Counter, goldenRune10Counter, setGoldenRune10Counter, goldenRune11Counter, setGoldenRune11Counter, goldenRune12Counter, setGoldenRune12Counter, goldenRune13Counter, setGoldenRune13Counter, numensRuneCounter, setNumensRuneCounter, herosRune1Counter, setHerosRune1Counter, herosRune2Counter, setHerosRune2Counter, herosRune3Counter, setHerosRune3Counter, herosRune4Counter, setHerosRune4Counter, herosRune5Counter, setHerosRune5Counter, lordsRuneCounter, setLordsRuneCounter);

  return (
    <div className="App">
      <h1>Elden Ring Rune Calculator</h1>

      <div className="AllRuneContainers">

        <Rune
          name = "Golden Rune 1"
          image = {goldenRune1Img}
          rune = {goldenRune1}
          runeCounter = {goldenRune1Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune1);
            setGoldenRune1Counter(goldenRune1Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune1);
            setGoldenRune1Counter(goldenRune1Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 2"
          image = {goldenRune2Img}
          rune = {goldenRune2}
          runeCounter = {goldenRune2Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune2);
            setGoldenRune2Counter(goldenRune2Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune2);
            setGoldenRune2Counter(goldenRune2Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 3"
          image = {goldenRune3Img}
          rune = {goldenRune3}
          runeCounter = {goldenRune3Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune3);
            setGoldenRune3Counter(goldenRune3Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune3);
            setGoldenRune3Counter(goldenRune3Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 4"
          image = {goldenRune4Img}
          rune = {goldenRune4}
          runeCounter = {goldenRune4Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune4);
            setGoldenRune4Counter(goldenRune4Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune4);
            setGoldenRune4Counter(goldenRune4Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 5"
          image = {goldenRune5Img}
          rune = {goldenRune5}
          runeCounter = {goldenRune5Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune5);
            setGoldenRune5Counter(goldenRune5Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune5);
            setGoldenRune5Counter(goldenRune5Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 6"
          image = {goldenRune6Img}
          rune = {goldenRune6}
          runeCounter = {goldenRune6Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune6);
            setGoldenRune6Counter(goldenRune6Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune6);
            setGoldenRune6Counter(goldenRune6Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 7"
          image = {goldenRune7Img}
          rune = {goldenRune7}
          runeCounter = {goldenRune7Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune7);
            setGoldenRune7Counter(goldenRune7Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune7);
            setGoldenRune7Counter(goldenRune7Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 8"
          image = {goldenRune8Img}
          rune = {goldenRune8}
          runeCounter = {goldenRune8Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune8);
            setGoldenRune8Counter(goldenRune8Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune8);
            setGoldenRune8Counter(goldenRune8Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 9"
          image = {goldenRune9Img}
          rune = {goldenRune9}
          runeCounter = {goldenRune9Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune9);
            setGoldenRune9Counter(goldenRune9Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune9);
            setGoldenRune9Counter(goldenRune9Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 10"
          image = {goldenRune10Img}
          rune = {goldenRune10}
          runeCounter = {goldenRune10Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune10);
            setGoldenRune10Counter(goldenRune10Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune10);
            setGoldenRune10Counter(goldenRune10Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 11"
          image = {goldenRune11Img}
          rune = {goldenRune11}
          runeCounter = {goldenRune11Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune11);
            setGoldenRune11Counter(goldenRune11Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune11);
            setGoldenRune11Counter(goldenRune11Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 12"
          image = {goldenRune12Img}
          rune = {goldenRune12}
          runeCounter = {goldenRune12Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune12);
            setGoldenRune12Counter(goldenRune12Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune12);
            setGoldenRune12Counter(goldenRune12Counter + 1);
          }}
        />

        <Rune
          name = "Golden Rune 13"
          image = {goldenRune13Img}
          rune = {goldenRune13}
          runeCounter = {goldenRune13Counter}
          subtractRuneFunction = {() => {
            subtractRunes(goldenRune13);
            setGoldenRune13Counter(goldenRune13Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(goldenRune13);
            setGoldenRune13Counter(goldenRune13Counter + 1);
          }}
        />

        <Rune
          name = "Numen's Rune"
          image = {goldenRune12Img}
          rune = {numensRune}
          runeCounter = {numensRuneCounter}
          subtractRuneFunction = {() => {
            subtractRunes(numensRune);
            setNumensRuneCounter(numensRuneCounter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(numensRune);
            setNumensRuneCounter(numensRuneCounter + 1);
          }}
        />

        <Rune
          name = "Hero's Rune 1"
          image = {herosRune1Img}
          rune = {herosRune1}
          runeCounter = {herosRune1Counter}
          subtractRuneFunction = {() => {
            subtractRunes(herosRune1);
            setHerosRune1Counter(herosRune1Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(herosRune1);
            setHerosRune1Counter(herosRune1Counter + 1);
          }}
        />

        <Rune
          name = "Hero's Rune 2"
          image = {herosRune1Img}
          rune = {herosRune2}
          runeCounter = {herosRune2Counter}
          subtractRuneFunction = {() => {
            subtractRunes(herosRune2);
            setHerosRune2Counter(herosRune2Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(herosRune2);
            setHerosRune2Counter(herosRune2Counter + 1);
          }}
        />

        <Rune
          name = "Hero's Rune 3"
          image = {herosRune1Img}
          rune = {herosRune3}
          runeCounter = {herosRune3Counter}
          subtractRuneFunction = {() => {
            subtractRunes(herosRune3);
            setHerosRune3Counter(herosRune3Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(herosRune3);
            setHerosRune3Counter(herosRune3Counter + 1);
          }}
        />

        <Rune
          name = "Hero's Rune 4"
          image = {herosRune4Img}
          rune = {herosRune4}
          runeCounter = {herosRune4Counter}
          subtractRuneFunction = {() => {
            subtractRunes(herosRune4);
            setHerosRune4Counter(herosRune4Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(herosRune4);
            setHerosRune4Counter(herosRune4Counter + 1);
          }}
        />

        <Rune
          name = "Hero's Rune 5"
          image = {herosRune5Img}
          rune = {herosRune5}
          runeCounter = {herosRune5Counter}
          subtractRuneFunction = {() => {
            subtractRunes(herosRune5);
            setHerosRune5Counter(herosRune5Counter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(herosRune5);
            setHerosRune5Counter(herosRune5Counter + 1);
          }}
        />

        <Rune
          name = "Lord's Rune"
          image = {lordsRuneImg}
          rune = {lordsRune}
          runeCounter = {lordsRuneCounter}
          subtractRuneFunction = {() => {
            subtractRunes(lordsRune);
            setLordsRuneCounter(lordsRuneCounter - 1);
          }}
          addRuneFunction = {() => {
            addRunes(lordsRune);
            setLordsRuneCounter(lordsRuneCounter + 1);
          }}
        />

        {/* end of rune section */}
      </div>

      <div className="StickyFooter">
        <h2>Total Runes: {numberWithCommas(runes)}</h2>
      </div>
    </div>
  );

}
export default App;

// display number with commas in it
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
