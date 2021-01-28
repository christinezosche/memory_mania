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

    renderWithDelay = (prop) => {
    if (prop === true) {
        this.setState({
            postClickDelay: true
        });
        this.timer1 = setTimeout(() => { this.setState({
            postClickDelay: false
        })}, 1500);
        this.timer2 = setTimeout(() => { this.updateState() }, 1600)
    }
    }

    componentWillUnmount() {
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);

    }

    componentDidUpdate(prevProps) {
        if (this.props.newTurn !== prevProps.newTurn) {
            this.renderWithDelay(this.props.newTurn)
        }
      }

    render () {
        this.props.checkForPairs()
        
        return <div>{this.renderCard()}</div>
        
    }
}

export default GameCard

