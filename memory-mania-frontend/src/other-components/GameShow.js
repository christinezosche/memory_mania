import React from 'react';
import GameContainer from '../containers/GameContainer'

const GameShow = (props) => {
 
  return (
    <div>
      <GameContainer gameName={props.games[props.match.params.gameId].name} image_urls={props.games[props.match.params.gameId].image_urls}/>
    </div>
  );
}
 
export default GameShow;