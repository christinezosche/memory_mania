import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnterUsername from './EnterUsername'

class GameEnder extends Component {

  state = {
    statId: '',
    renderUsernamePopUp: true
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
        statId: object.id
      })
    });
}

changePopUpState = () => {
  this.setState({
    renderUsernamePopUp: false
  })
}


componentDidMount () {
  this.addGame()
}

render () {

  if (this.state.renderUsernamePopUp === true) {
    return (
        <div>
        
        <EnterUsername statId={this.state.statId} changePopUpState={this.changePopUpState}/>
      
      </div>
    )
    }
  else {
    return (
      <div>
        <h1>Game Over!</h1>
        <h2>Your Time: {this.props.time}</h2>
      <button className="start-button" onClick={() => this.props.startNewGame()}>
          Play Again!
      </button>
      </div>

    )
  }
  }
}

  const mapStateToProps = state => {
    return state
  }


export default connect(mapStateToProps)(GameEnder)