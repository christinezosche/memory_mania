import React, { Component } from 'react'
import GameCard from './GameCard'

class Game extends Component {

    constructor() {
        super()

        this.state = {
            currentPair: [],
            completedPairs: [],
            newTurn: false,
            gameComplete: false
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
    }

    render () {

        return (
        <div className="game-container">
                {this.props.images.map((image) => <GameCard imageUrl={image.url} imageId={image.id} addToCurrentPair={this.addToCurrentPair} checkForPairs={this.checkForPairs} hasBeenMatched={this.hasBeenMatched} newTurn={this.state.newTurn} />)}
        </div>
        )

    }


}

export default Game