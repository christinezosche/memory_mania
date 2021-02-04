import React from 'react';
import GameContainer from '../containers/GameContainer'

const GameShow = (props) => {
 
  return (
    <div>
      <GameContainer gameName={props.games[props.match.params.gameId].name} image_urls={props.games[props.match.params.gameId].image_urls} game_id={props.games[props.match.params.gameId].id}/>
    </div>
  );
}
 
export default GameShow;