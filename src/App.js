import "./App.css";
import React from "react";
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
        <div className="RuneContainer">
          <div>Golden Rune 1</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune1Img}
              alt="Golden Rune 1"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune1}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune1);
                setGoldenRune1Counter(goldenRune1Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune1Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune1);
                setGoldenRune1Counter(goldenRune1Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 2</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune2Img}
              alt="Golden Rune 2"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune2}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune2);
                setGoldenRune2Counter(goldenRune2Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune2Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune2);
                setGoldenRune2Counter(goldenRune2Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 3</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune3Img}
              alt="Golden Rune 3"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune3}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune3);
                setGoldenRune3Counter(goldenRune3Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune3Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune3);
                setGoldenRune3Counter(goldenRune3Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 4</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune4Img}
              alt="Golden Rune 4"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune4}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune4);
                setGoldenRune4Counter(goldenRune4Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune4Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune4);
                setGoldenRune4Counter(goldenRune4Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 5</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune5Img}
              alt="Golden Rune 5"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune5}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune5);
                setGoldenRune5Counter(goldenRune5Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune5Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune5);
                setGoldenRune5Counter(goldenRune5Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 6</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune6Img}
              alt="Golden Rune 6"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune6}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune6);
                setGoldenRune6Counter(goldenRune6Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune6Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune6);
                setGoldenRune6Counter(goldenRune6Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 7</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune7Img}
              alt="Golden Rune 7"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune7}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune7);
                setGoldenRune7Counter(goldenRune7Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune7Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune7);
                setGoldenRune7Counter(goldenRune7Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 8</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune8Img}
              alt="Golden Rune 8"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune8}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune8);
                setGoldenRune8Counter(goldenRune8Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune8Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune8);
                setGoldenRune8Counter(goldenRune8Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 9</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune9Img}
              alt="Golden Rune 9"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune9}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune9);
                setGoldenRune9Counter(goldenRune9Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune9Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune9);
                setGoldenRune9Counter(goldenRune9Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 10</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune10Img}
              alt="Golden Rune 10"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune10}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune10);
                setGoldenRune10Counter(goldenRune10Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune10Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune10);
                setGoldenRune10Counter(goldenRune10Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 11</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune10Img}
              alt="Golden Rune 11"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune11}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune11);
                setGoldenRune11Counter(goldenRune11Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune11Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune11);
                setGoldenRune11Counter(goldenRune11Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 12</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune12Img}
              alt="Golden Rune 12"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune12}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune12);
                setGoldenRune12Counter(goldenRune12Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune12Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune12);
                setGoldenRune12Counter(goldenRune12Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 13</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune12Img}
              alt="Golden Rune 13"
            ></img>
            <div className="RuneAmountDisplay">{goldenRune13}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(goldenRune13);
                setGoldenRune13Counter(goldenRune13Counter - 1);
              }}
            >
              -
            </button>
            <div>{goldenRune13Counter}</div>
            <button
              onClick={() => {
                addRunes(goldenRune13);
                setGoldenRune13Counter(goldenRune13Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Numen's Rune</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={goldenRune12Img}
              alt="Numen's Rune"
            ></img>
            <div className="RuneAmountDisplay">{numensRune}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(numensRune);
                setNumensRuneCounter(numensRuneCounter - 1);
              }}
            >
              -
            </button>
            <div>{numensRuneCounter}</div>
            <button
              onClick={() => {
                addRunes(numensRune);
                setNumensRuneCounter(numensRuneCounter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Hero's Rune 1</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={herosRune1Img}
              alt="Hero's Rune 1"
            ></img>
            <div className="RuneAmountDisplay">{herosRune1}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(herosRune1);
                setHerosRune1Counter(herosRune1Counter - 1);
              }}
            >
              -
            </button>
            <div>{herosRune1Counter}</div>
            <button
              onClick={() => {
                addRunes(herosRune1);
                setHerosRune1Counter(herosRune1Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Hero's Rune 2</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={herosRune1Img}
              alt="Hero's Rune 2"
            ></img>
            <div className="RuneAmountDisplay">{herosRune2}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(herosRune2);
                setHerosRune2Counter(herosRune2Counter - 1);
              }}
            >
              -
            </button>
            <div>{herosRune2Counter}</div>
            <button
              onClick={() => {
                addRunes(herosRune2);
                setHerosRune2Counter(herosRune2Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Hero's Rune 3</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={herosRune1Img}
              alt="Hero's Rune 3"
            ></img>
            <div className="RuneAmountDisplay">{herosRune3}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(herosRune3);
                setHerosRune3Counter(herosRune3Counter - 1);
              }}
            >
              -
            </button>
            <div>{herosRune3Counter}</div>
            <button
              onClick={() => {
                addRunes(herosRune3);
                setHerosRune3Counter(herosRune3Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Hero's Rune 4</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={herosRune4Img}
              alt="Hero's Rune 4"
            ></img>
            <div className="RuneAmountDisplay">{herosRune4}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(herosRune4);
                setHerosRune4Counter(herosRune4Counter - 1);
              }}
            >
              -
            </button>
            <div>{herosRune4Counter}</div>
            <button
              onClick={() => {
                addRunes(herosRune4);
                setHerosRune4Counter(herosRune4Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Hero's Rune 5</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={herosRune5Img}
              alt="Hero's Rune 5"
            ></img>
            <div className="RuneAmountDisplay">{herosRune5}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(herosRune5);
                setHerosRune5Counter(herosRune5Counter - 1);
              }}
            >
              -
            </button>
            <div>{herosRune5Counter}</div>
            <button
              onClick={() => {
                addRunes(herosRune5);
                setHerosRune5Counter(herosRune5Counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Lord's Rune</div>
          <div className="RuneImageContainer">
            <img
              className="RuneImage"
              src={lordsRuneImg}
              alt="Lord's Rune"
            ></img>
            <div className="RuneAmountDisplay">{lordsRune}</div>
          </div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                subtractRunes(lordsRune);
                setLordsRuneCounter(lordsRuneCounter - 1);
              }}
            >
              -
            </button>
            <div>{lordsRuneCounter}</div>
            <button
              onClick={() => {
                addRunes(lordsRune);
                setLordsRuneCounter(lordsRuneCounter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

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
