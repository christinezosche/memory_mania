import React, { Component } from 'react'
import GameCard from './GameCard'
import GameStarter from './GameStarter'
import Timer from './Timer'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addGame } from '../actions/games';

class Game extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            time: '',
            id: '',
            currentPair: [],
            completedPairs: [],
            newGame: true,
            newTurn: false,
            gameComplete: false,
            disableGame: false
        }
    }

    startGame = () => {
        let newID = uuid();
        this.setState({
            newGame: false,
            id: newID
        })
    }

    addToCurrentPair = (imageId) => {
        this.setState({
            currentPair: [...this.state.currentPair, imageId]
        })
    }

    hasBeenMatched = (imageId) => {
        if (this.state.completedPairs.filter(id => id === imageId).length === 0) {
            return false
        }
        else {
            return true
        }
    }

    checkForPairs = () => {
        if (this.state.currentPair.length === 2) {
            if (this.state.currentPair[0] === this.state.currentPair[1]) {
                this.setState({
                    currentPair: [],
                    completedPairs: [...this.state.completedPairs, this.state.currentPair[0]],
                    newTurn: true
                })
            }
            else {
                this.setState({
                    currentPair: [],
                    newTurn: true
                })
            }
        }
        else if (this.state.newTurn === false) {
        }
        else {
            this.setState({
                newTurn: false
            })
        }
    this.checkForGameOver()
    }

    checkForGameOver = () => {
        if (this.state.completedPairs.length === 6) {
            this.setDelay()
            this.dispatchGame()
        }
        
    }

    setGameTime = (time) => {
        this.setState({
            time: time,
            gameComplete: false,
            disableGame: true
        })
    }

    dispatchGame = () => {
        this.props.addGame(
            {name: this.state.name,
            id: this.state.id,
            time: this.state.time }
        )
    }

    setDelay = () => {
        setTimeout(() => { this.setState({
            gameComplete: true
        })}, 1000);
    }

    renderCards = () => {
        return this.props.images.map((image) => <GameCard imageUrl={image.url} imageId={image.id} addToCurrentPair={this.addToCurrentPair} checkForPairs={this.checkForPairs} hasBeenMatched={this.hasBeenMatched} newTurn={this.state.newTurn} />)
    }

    renderEnd = () => {
        return <h1>Game Over!</h1>
    }

    renderGame = () => {
        if (this.state.disableGame === true) {
            return <div className="game-container">{this.renderEnd()}</div>        
        }
        else {
            return <div className="game-container">{this.renderCards()}</div>
        }
    }

    render () {
        if (this.state.newGame === true) {
            return <div className="game-container"><GameStarter startGame={this.startGame} /></div>
        }
        else {
        return (
        <div>
        <div className="timer"><Timer gameComplete={this.state.gameComplete} setGameTime={this.setGameTime} /></div>
        <div>{this.renderGame()}</div>
        </div>
        )
        }
    }


}

// const mapDispatchToProps = dispatch => ({
//   addGame: state => dispatch(addGame(state))
// })

export default connect(null, {addGame})(Game)