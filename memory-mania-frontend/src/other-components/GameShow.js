import React from 'react';
import GameContainer from '../containers/GameContainer'

const GameShow = (props) => {
 
  return (
    <div>
      <GameContainer gameName={props.games[props.match.params.gameId].name}/>
    </div>
  );
}
 
export default GameShow;