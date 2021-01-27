import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import CardBlank from './CardBlank'

class GameCard extends Component {

    constructor() {
        super()

        this.state = {
            hasBeenClicked: false,
            hasBeenMatched: false,
            postClickDelay: false
        }
    }

    renderCard = () => {
        if (this.state.hasBeenMatched === true) {
            return <div className="game-card"><CardBlank /></div>
        }
        else if (this.state.hasBeenClicked === false) {
            if (this.state.postClickDelay === true) {
                    return <div className="game-card"><CardBack /></div>
                }
            else {
            return <div className="game-card" onClick={() => this.toggleClick()}><CardBack /></div>
            }
        }
        else {
        return <div className="game-card"><CardFront imageUrl={this.props.imageUrl} /></div>
        }
    }

    toggleState = () => {
        if (this.props.hasBeenMatched(this.props.imageId)) {
                this.setState({
                hasBeenMatched: true,
                hasBeenClicked: false
                })
        }
        else if (this.state.hasBeenClicked === true) {
                this.setState({
                hasBeenClicked: false
            })
        }
    }

    toggleClick = () => {
        this.setState({
                hasBeenClicked: true
            });
        this.props.addToCurrentPair(this.props.imageId)
    }

    renderWithDelay = () => {
        this.setState({
            postClickDelay: true
        });
        setTimeout(() => { this.setState({
            postClickDelay: false
        })}, 2000);
        setTimeout(() => { this.toggleState() }, 2000)
    }

    render () {
        this.props.checkForPairs()
        //this.props.checkForGameOver()
        if (this.props.newTurn === true) {
            return <div>{this.renderWithDelay()}</div>
        }
        else {
        return <div>{this.renderCard()}</div>
        }
    }
}

export default GameCard

