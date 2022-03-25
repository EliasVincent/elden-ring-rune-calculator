import "./App.css";
import React from "react";
import RuneTypes, { goldenRune1 } from "./RuneTypes";

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

      <h2>Total Runes: {runes}</h2>
    </div>
  );
}
export default App;
