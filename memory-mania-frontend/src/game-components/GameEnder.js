import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnterUsername from './EnterUsername'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

class GameEnder extends Component {

  constructor() {
    super()

    this.state = {
    statId: '',
    renderUsernamePopUp: true
    }
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
        <Container fluid>
        <EnterUsername statId={this.state.statId} changePopUpState={this.changePopUpState}/>
        </Container>
      </div>
    )
    }
  else {
    return (
      <div>
        <Container fluid>
        <h1>Game Over!</h1>
        <h2 style={styles.h}>Your Time: {this.props.time}</h2>
        <Button variant="outline-info"  onClick={() => this.props.startNewGame()}>
          Play Again!
          </Button>{' '}
      </Container>
      </div>

    )
  }
  }
}

const styles = {
  h: {
    color: '#51068f'
  }
}

  const mapStateToProps = state => {
    return state
  }


export default connect(mapStateToProps)(GameEnder)