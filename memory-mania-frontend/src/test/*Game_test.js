import React, { Component } from 'react'
import GameCards from './*GameCards'
import GameStarter from './*GameStarter'
import Timer from './*Timer'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { setData } from '../actions/games';

class GameTest extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            id: uuid(),
            newGame: true
        }
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
      setData: (object) => dispatch(setData(object))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GameTest)