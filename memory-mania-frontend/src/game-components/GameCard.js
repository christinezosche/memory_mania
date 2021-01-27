import React, { Component } from 'react'
import CardFront from './card-components/CardFront'
import CardBack from './card-components/CardBack'
import CardBlank from './card-components/CardBlank'

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

    updateState = () => {
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
        })}, 1500);
        setTimeout(() => { this.updateState() }, 1500)
    }

    render () {
        this.props.checkForPairs()
        if (this.props.newTurn === true) {
            return <div>{this.renderWithDelay()}</div>
        }
        else {
        return <div>{this.renderCard()}</div>
        }
    }
}

export default GameCard

