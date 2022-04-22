import React from 'react'

export default function Rune(props) {
  return (
    <div className="RuneContainer">
        <div>{props.name}</div>

        <div className="RuneImageContainer">
            <img className='RuneImage' src={props.image} alt={props.name}/>
            <div className="RuneAmountDisplay">{props.rune}</div>
        </div>

        <div className="RuneButtonContainer">
            <button
              onClick={props.subtractRuneFunction}
            >
              -
            </button>
            <div>{props.runeCounter}</div>
            <button
              onClick={props.addRuneFunction}
            >
              +
            </button>
          </div>
    </div>
  )
}
