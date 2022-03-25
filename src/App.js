import "./App.css";
import React from "react";

const goldenRune1 = 200;
const goldenRune2 = 400;
const goldenRune3 = 800;
const goldenRune4 = 1200;
const goldenRune5 = 1600;
const goldenRune6 = 2000;
const goldenRune7 = 2500;
const goldenRune8 = 3000;
const goldenRune9 = 3800;
const goldenRune10 = 5000;
const goldenRune11 = 6250;
const goldenRune12 = 7500;
const goldenRune13 = 10000;
const numensRune = 12500;
const herosRune1 = 15000;
const herosRune2 = 20000;
const herosRune3 = 25000;
const herosRune4 = 30000;
const herosRune5 = 35000;
const lordsRune = 50000;

function App() {
  // state number
  const [runes, setRunes] = React.useState(0);

  const addRunes = (runesToAdd) => {
    setRunes(runes + runesToAdd);
  };

  const subtractRunes = (runesToSubtract) => {
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

  return (
    <div className="App">
      <h1>Elden Ring Rune Calculator</h1>

      <div className="AllRuneContainers">
        <div className="RuneContainer">
          <div>Golden Rune 1</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune1);
                setGoldenRune1Counter(goldenRune1Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune1Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune1);
                setGoldenRune1Counter(goldenRune1Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 2</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune2);
                setGoldenRune2Counter(goldenRune2Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune2Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune2);
                setGoldenRune2Counter(goldenRune2Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 3</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune3);
                setGoldenRune3Counter(goldenRune3Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune3Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune3);
                setGoldenRune3Counter(goldenRune3Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 4</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune4);
                setGoldenRune4Counter(goldenRune4Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune4Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune4);
                setGoldenRune4Counter(goldenRune4Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 5</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune5);
                setGoldenRune5Counter(goldenRune5Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune5Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune5);
                setGoldenRune5Counter(goldenRune5Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 6</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune6);
                setGoldenRune6Counter(goldenRune6Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune6Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune6);
                setGoldenRune6Counter(goldenRune6Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 7</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune7);
                setGoldenRune7Counter(goldenRune7Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune7Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune7);
                setGoldenRune7Counter(goldenRune7Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 8</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune8);
                setGoldenRune8Counter(goldenRune8Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune8Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune8);
                setGoldenRune8Counter(goldenRune8Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 9</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune9);
                setGoldenRune9Counter(goldenRune9Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune9Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune9);
                setGoldenRune9Counter(goldenRune9Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 10</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune10);
                setGoldenRune10Counter(goldenRune10Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune10Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune10);
                setGoldenRune10Counter(goldenRune10Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 11</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune11);
                setGoldenRune11Counter(goldenRune11Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune11Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune11);
                setGoldenRune11Counter(goldenRune11Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 12</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune12);
                setGoldenRune12Counter(goldenRune12Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune12Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune12);
                setGoldenRune12Counter(goldenRune12Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Golden Rune 13</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(goldenRune13);
                setGoldenRune13Counter(goldenRune13Counter + 1);
              }}
            >
              +
            </button>
            <div>{goldenRune13Counter}</div>
            <button
              onClick={() => {
                subtractRunes(goldenRune13);
                setGoldenRune13Counter(goldenRune13Counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="RuneContainer">
          <div>Numen's Rune</div>
          <div className="RuneButtonContainer">
            <button
              onClick={() => {
                addRunes(numensRune);
                setNumensRuneCounter(numensRuneCounter + 1);
              }}
            >
              +
            </button>
            <div>{numensRuneCounter}</div>
            <button
              onClick={() => {
                subtractRunes(numensRune);
                setNumensRuneCounter(numensRuneCounter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

      <div className="RuneContainer">
        <div>Hero's Rune 1</div>
        <div className="RuneButtonContainer">
          <button
            onClick={() => {
              addRunes(herosRune1);
              setHerosRune1Counter(herosRune1Counter + 1);
            }}
          >
            +
          </button>
          <div>{herosRune1Counter}</div>
          <button
            onClick={() => {
              subtractRunes(herosRune1);
              setHerosRune1Counter(herosRune1Counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="RuneContainer">
        <div>Hero's Rune 2</div>
        <div className="RuneButtonContainer">
          <button
            onClick={() => {
              addRunes(herosRune2);
              setHerosRune2Counter(herosRune2Counter + 1);
            }}
          >
            +
          </button>
          <div>{herosRune2Counter}</div>
          <button
            onClick={() => {
              subtractRunes(herosRune2);
              setHerosRune2Counter(herosRune2Counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="RuneContainer">
        <div>Hero's Rune 3</div>
        <div className="RuneButtonContainer">
          <button
            onClick={() => {
              addRunes(herosRune3);
              setHerosRune3Counter(herosRune3Counter + 1);
            }}
          >
            +
          </button>
          <div>{herosRune3Counter}</div>
          <button
            onClick={() => {
              subtractRunes(herosRune3);
              setHerosRune3Counter(herosRune3Counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="RuneContainer">
        <div>Hero's Rune 4</div>
        <div className="RuneButtonContainer">
          <button
            onClick={() => {
              addRunes(herosRune4);
              setHerosRune4Counter(herosRune4Counter + 1);
            }}
          >
            +
          </button>
          <div>{herosRune4Counter}</div>
          <button
            onClick={() => {
              subtractRunes(herosRune4);
              setHerosRune4Counter(herosRune4Counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="RuneContainer">
        <div>Hero's Rune 5</div>
        <div className="RuneButtonContainer">
          <button
            onClick={() => {
              addRunes(herosRune5);
              setHerosRune5Counter(herosRune5Counter + 1);
            }}
          >
            +
          </button>
          <div>{herosRune5Counter}</div>
          <button
            onClick={() => {
              subtractRunes(herosRune5);
              setHerosRune5Counter(herosRune5Counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="RuneContainer">
        <div>Lord's Rune</div>
        <div className="RuneButtonContainer">
          <button
            onClick={() => {
              addRunes(lordsRune);
              setLordsRuneCounter(lordsRuneCounter + 1);
            }}
          >
            +
          </button>
          <div>{lordsRuneCounter}</div>
          <button
            onClick={() => {
              subtractRunes(lordsRune);
              setLordsRuneCounter(lordsRuneCounter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

{/* end of rune section */}
</div>
      <h2>Total Runes: {numberWithCommas(runes)}</h2>
    </div>
  );
}
export default App;

// display number with commas in it
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
