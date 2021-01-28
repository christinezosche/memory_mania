
import React, { Component } from 'react'
import GameCard from './*GameCard'
import { connect } from 'react-redux';
import { setGameComplete, clearCurrentPair, addToCompletedPairs, setNewTurn } from '../actions/games'

class GameCards extends Component {

    // constructor() {
    //     super()

    //     this.state = {
    //        // currentPair: [],
    //         // completedPairs: [],
    //         //newTurn: false,
    //        // gameCompleted: false
    //     }
    // }

    hasBeenMatched = (imageId) => {
        if (this.props.completedPairs.filter(id => id === imageId).length === 0) {
            return false
        }
        else {
            return true
        }
    }

    checkForPairs = () => {

        if (this.props.currentPair.length === 2) {
            if (this.props.currentPair[0] === this.props.currentPair[1]) {
                this.props.addToCompletedPairs(this.props.currentPair[0])
                this.props.clearCurrentPair()
                this.props.setNewTurn(true)
                // this.setState({
                //     currentPair: [],
                //     completedPairs: [...this.state.completedPairs, this.state.currentPair[0]],
                //     newTurn: true
                // })
            }
            else {

                this.props.clearCurrentPair()
                this.props.setNewTurn(true)
                // this.setState({
                //     currentPair: [],
                //     newTurn: true
                // })
            }
        }
        else if (this.props.newTurn === false) {
        }
        else {
            this.props.setNewTurn(false)

        }
    this.checkForGameOver()
    }

    checkForGameOver = () => {
        if (this.props.completedPairs.length === 6) {
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
        return this.props.images.map((image) => <GameCard imageUrl={image.url} imageId={image.id} checkForPairs={this.checkForPairs} hasBeenMatched={this.hasBeenMatched} />)
    }

    render () {
        this.checkForPairs()
        return (
            <div>{this.renderGame()}</div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      setGameComplete: () => dispatch(setGameComplete()),
      clearCurrentPair: () => dispatch(clearCurrentPair()),
      addToCompletedPairs: (imageId) => dispatch(addToCompletedPairs(imageId)),
      setNewTurn: (value) => dispatch(setNewTurn(value))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GameCards)