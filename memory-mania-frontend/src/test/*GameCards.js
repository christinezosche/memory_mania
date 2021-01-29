
import React, { Component } from 'react'
import GameCard from './*GameCard'
import { connect } from 'react-redux';
import { setGameComplete, clearCurrentPair, addToCompletedPairs, clearHoldImages, setNewTurn, setPostClickDelay } from '../actions/games'

class GameCards extends Component {

    checkForPairs = () => {

        if (this.props.currentPair.length === 2) {
            if (this.props.currentPair[0].imageId === this.props.currentPair[1].imageId) {
                this.props.addToCompletedPairs(this.props.currentPair[0].id)
                this.props.addToCompletedPairs(this.props.currentPair[1].id)
                this.props.clearCurrentPair()
                setTimeout(() => { this.props.clearHoldImages() }, 1500); 
                this.props.setNewTurn(true)
                this.props.setPostClickDelay(true)        
                setTimeout(() => { this.props.setPostClickDelay(false) }, 1500); 
            }
            else {
                this.props.clearCurrentPair()
                setTimeout(() => { this.props.clearHoldImages() }, 1500); 
                this.props.setNewTurn(true)
                this.props.setPostClickDelay(true)        
                setTimeout(() => { this.props.setPostClickDelay(false) }, 1500); 
            }
        }
        else {
            this.props.setNewTurn(false)
        }
    this.checkForGameOver()
    }

    checkForGameOver = () => {
        if (this.props.completedPairs.length === 12) {
            setTimeout(() => { this.props.setGameComplete() }, 1000)
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
        return (
        <h1>Game Over!</h1>
        )
    }

    renderCards = () => {
        return this.props.images.map((image) => <GameCard imageUrl={image.url} imageId={image.id} />)
    }

    componentDidUpdate = () => {
        this.checkForPairs()
    }

    render () {
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
      addToCompletedPairs: (imageObject) => dispatch(addToCompletedPairs(imageObject)),
      setNewTurn: (value) => dispatch(setNewTurn(value)),
      setPostClickDelay: (value) => dispatch(setPostClickDelay(value)),
      clearHoldImages: () => dispatch(clearHoldImages())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GameCards)