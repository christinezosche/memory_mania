
import React, { Component } from 'react'
import GameCard from './*GameCard'
import { connect } from 'react-redux';
import { setGameComplete } from '../actions/games'

class GameCards extends Component {

    constructor() {
        super()

        this.state = {
            currentPair: [],
            completedPairs: [],
            newTurn: false,
           // gameCompleted: false
        }
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
            setTimeout(() => { this.props.setGameComplete() }, 1000);
            //this.props.setDelay()
            //this.props.dispatchGame()
        }
    }

    renderGame = () => {
        if (this.props.gameComplete === true) {
            return <div className="game-container">{this.renderEnd()}</div>        
        }
        else {
            return <div className="game-container">{this.renderCards()}</div>
        }
    }

    renderEnd = () => {
        return <h1>Game Over!</h1>
    }

    renderCards = () => {
        return this.props.images.map((image) => <GameCard imageUrl={image.url} imageId={image.id} addToCurrentPair={this.addToCurrentPair} checkForPairs={this.checkForPairs} hasBeenMatched={this.hasBeenMatched} newTurn={this.state.newTurn} />)
    }

    render () {
        return (
            <div>{this.renderGame()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
      gameComplete: state.gameComplete
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      setGameComplete: () => dispatch(setGameComplete())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GameCards)