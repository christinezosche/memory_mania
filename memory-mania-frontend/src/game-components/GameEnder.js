import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnterUsername from './EnterUsername'

class GameEnder extends Component {

  state = {
    gameId: ''
  }

addGame = () => {
    let gameData = {
         "name": this.props.name,
         "time": this.props.time,
         "game_id": this.props.id,
         "username": '',
         };

    let configObj = {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
             },
             body: JSON.stringify(gameData)
           };
    fetch('http://localhost:3000/games', configObj)
    .then((response) => response.json())
    .then((object) => {
      this.setState({
        gameId: object.id
      })
    });
}

componentDidMount () {
  this.addGame()
}

render () {
    return (
        <div>
        <h1>Game Over!</h1>
        <h2>Your Time: {this.props.time}</h2>
        <EnterUsername gameId={this.state.gameId} />
      <button className="start-button" onClick={() => this.props.startNewGame()}>
          Play Again!
      </button>
      <button className="start-button" onClick={() => this.props.browseOtherGames()}>
          Browse Other Games!
      </button>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return state
  }

export default connect(mapStateToProps)(GameEnder)