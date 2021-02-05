import React from 'react';
import { Link } from 'react-router-dom';
 
const GamesList = (props) => {
  let allGames = props.games
  
  const renderCreatorName = (object) => {
    if (object.id >= 5) {
      return ` | Created by: ${object.creator}`
    }
  }
  const renderAllGames = (gameArray) => {
    let array = [...gameArray] 
    return (<div>
    <h3>All Games</h3>
    {array.map(object => <p key={gameArray.indexOf(object)}><Link to={`/games/${gameArray.indexOf(object)}`}>{object.name} Memory</Link>{renderCreatorName(object)}</p>)}
    </div>)
  }

  const renderTopGames = (gameArray) => {
    let array = [...gameArray]
    array.sort((a, b) => {
        return b.times_played - a.times_played
      });
    let shortArray = array.slice(0,15)
    return (
    <div>
    <h3>Most Played Games</h3>
    
    {shortArray.map(object => <p key={gameArray.indexOf(object)}><Link to={`/games/${gameArray.indexOf(object)}`}>{object.name} Memory</Link>{renderCreatorName(object)}</p>)}
    
    </div>
    )
}

const renderNewGames = (gameArray) => {
  let array = [...gameArray]
  array.sort((a, b) => {
      return b.id - a.id
    });
  let shortArray = array.slice(0,15)
  return (
  <div>
  <h3>Newest Games</h3>
  
  {shortArray.map(object => <p key={gameArray.indexOf(object)}><Link to={`/games/${gameArray.indexOf(object)}`}>{object.name} Memory</Link>{renderCreatorName(object)}</p>)}
  
  </div>
  )
}

  return (
      <div>
       
      {renderTopGames(allGames)}
      
      {renderNewGames(allGames)}
          
      {renderAllGames(allGames)}
      </div>

  );
};
 
export default GamesList;