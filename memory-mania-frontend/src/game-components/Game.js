import React, { Component } from 'react'
import GameCards from './GameCards'
import GameStarter from './GameStarter'
import GameEnder from './GameEnder'
import Timer from './Timer'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { setData, clearGameData } from '../actions/games';

class Game extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            id: uuid(),
            newGame: true
        }
    }

    startNewGame = () => {
        this.props.clearGameData()
        let newId = uuid();
        this.setState({
            id: newId,
            newGame: true
        })
    }

    startGame = () => {
        this.setState({
            newGame: false
        })
        this.props.setData({name: this.state.name, id: this.state.id})
    }
    
    render () {
        if (this.state.newGame === true) {
            return <div className="game-container"><GameStarter startGame={this.startGame} /></div>
        }
        else if (this.props.gameComplete === true) {
            return <div className="game-container"><GameEnder time={this.props.time} startNewGame={this.startNewGame} /></div>
        }
        else {
        return (
        <div>
        <div className="timer"><Timer /></div>
        <div className="game-container"><GameCards images={this.props.images} /></div>
        </div>
        )
        }
    }


}

const mapStateToProps = state => {
    return state
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      setData: (object) => dispatch(setData(object)),
      clearGameData: () => dispatch(clearGameData())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game)