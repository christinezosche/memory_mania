import React from 'react';
import { Link } from 'react-router-dom';
 
const GamesList = (props) => {
  
  const renderGames = Object.keys(props.games).map(gameID =>
    <Link key={gameID} to={`/games/${gameID}`}>{props.games[gameID].name}</Link>
  );
  return (
    <div>
      {renderGames}
    </div>
  );
};
 
export default GamesList;