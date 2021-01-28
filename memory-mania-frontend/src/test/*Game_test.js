import React, { Component } from 'react'
import GameCards from './*GameCards'
import GameStarter from './*GameStarter'
import Timer from './*Timer'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addGame } from '../actions/games';

class GameTest extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            time: '',
            id: '',
            newGame: true
        }
    }

    startGame = () => {
        let newID = uuid();
        this.setState({
            newGame: false,
            id: newID
        })
    }

    dispatchGame = () => {
        this.props.addGame(
            {name: this.state.name,
            id: this.state.id,
            time: this.state.time }
        )
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

// const mapDispatchToProps = dispatch => ({
//   addGame: state => dispatch(addGame(state))
// })

export default connect(null, {addGame})(GameTest)