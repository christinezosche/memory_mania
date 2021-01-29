import React from 'react';

const GameEnder = props => {

    return (
        <div>
        <h1>Game Over!</h1>
        <h2>Your Time: {props.time}</h2>
      <button className="start-button" onClick={() => props.startNewGame()}>
          Start New Game!
      </button>
      </div>
    )
  }

export default GameEnder