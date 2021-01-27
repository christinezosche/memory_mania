import React from 'react';

const GameStarter = props => {

    return (
      <button className="start-button" onClick={() => props.startGame()}>
          Start Game!
      </button>
    )
  }

export default GameStarter