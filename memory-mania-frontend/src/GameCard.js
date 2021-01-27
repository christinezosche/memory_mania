import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import CardBlank from './CardBlank'

class GameCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasBeenClicked: false,
            hasBeenMatched: false,
            postClickDelay: props.postClickDelay
        }
    }

    renderCard = () => {
        if (this.props.hasBeenMatched(this.props.imageId)) {
            return <div className="game-card"><CardBlank /></div>
        }
        // else if (this.props.newTurn) {
        //     return <div className="game-card" onClick={() => this.toggleClick()}><CardBack /></div>
        // }
        // else if (this.state.mustDelay === true) {
        //     return <div className="game-card"><CardBack /></div>
        // }
        else if (this.state.hasBeenClicked === false) {
            return <div className="game-card" onClick={() => this.toggleClick()}><CardBack /></div>
        }
        else {
        return <div className="game-card"><CardFront imageUrl={this.props.imageUrl} /></div>
        }
    }

    toggleState = () => {
        if (this.props.newTurn === true && this.state.hasBeenClicked === true) {
        //     setTimeout(() => {
                this.setState({
                hasBeenClicked: false
            })
        // }, 3000)
            // if (this.state.postClickDelay === false) {
            //     this.setState({
            //     hasBeenClicked: false
            //     })
            //     setTimeout(() => {
            //         this.setState({
            //             hasBeenClicked: true
            //         })
            //     }, 3000)
            // }
            // }
        }
        // else if (this.props.newTurn === true && this.state.hasBeenClicked === false) {
        //     this.setState({
        //         mustDelay: true
        //     })
        //     setTimeout(() => {
        //     this.setState({
        //         mustDelay: false
        //     })
        //     }, 3000)
        // }
        // if (this.props.hasBeenMatched(this.props.imageId)) {
        //     // setTimeout(() => {
        //         this.setState({
        //             hasBeenMatched: true
        //         })
            // }, 3000)
    //     }
    }

    toggleClick = () => {
        this.setState({
                hasBeenClicked: true
            });
            this.props.addToCurrentPair(this.props.imageId)
        //this.props.checkForPairs()
    }

    render () {
        this.props.checkForPairs()
        this.toggleState()
        return (
                <div>{this.renderCard()}</div>
        )
    }

}

export default GameCard

