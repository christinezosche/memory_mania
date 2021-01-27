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
        // else if (this.props.newTurn) {
        //     return <div className="game-card" onClick={() => this.toggleClick()}><CardBack /></div>
        // }
        // else if (this.state.mustDelay === true) {
        //     return <div className="game-card"><CardBack /></div>
        // }
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
        // if (this.props.newTurn === true && this.state.hasBeenClicked === true) {
        if (this.props.hasBeenMatched(this.props.imageId)) {
                this.setState({
                hasBeenMatched: true,
                hasBeenClicked: false
                })
        }
        else if (this.state.hasBeenClicked === true) {

        //     setTimeout(() => {
                this.setState({
                hasBeenClicked: false
            })
        }
        
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

    renderWithDelay = () => {
        this.setState({
            postClickDelay: true
        });
        setTimeout(() => { this.setState({
            postClickDelay: false
        })}, 2000);
        // setTimeout(() => { this.props.checkForPairs() }, 3000)
        setTimeout(() => { this.toggleState() }, 2000)

    }

    render () {
        this.props.checkForPairs()
        if (this.props.newTurn === true) {
            return <div>{this.renderWithDelay()}</div>
        }
        else {
        // this.toggleState()
        return <div>{this.renderCard()}</div>
        }

    }

}

export default GameCard

