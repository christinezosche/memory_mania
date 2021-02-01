import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameEnder extends Component {

addGame = () => {
    let gameData = {
         "name": this.props.name,
         "time": this.props.time,
         "game_id": this.props.id,
         "user_id": 0,
         };
         let configObj = {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
             },
             body: JSON.stringify(gameData)
           };
           fetch(`http://localhost:3000/games`, configObj)
           .then((response) => response.json())
           .then((object) => {
           });
}

componentDidMount () {
  this.addGame()
}

render () {
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
}

  const mapStateToProps = state => {
    return state
  }

export default connect(mapStateToProps)(GameEnder)