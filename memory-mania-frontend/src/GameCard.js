import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import CardBlank from './CardBlank'

class GameCard extends Component {

    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    renderCard = () => {
        if (this.props.hasBeenMatched(this.props.imageId)) {
            return <CardBlank />
        }
        else if (this.state.hasBeenClicked === false) {
            return <CardBack />
        }
        else {
        return <CardFront imageUrl={this.props.imageUrl} />
        }
    }

    toggleClick = () => {
        this.setState({
                hasBeenClicked: true
            });
        this.props.addToCurrentPair(this.props.imageId)
    }

    render () {
        return (
            <div className="game-card" onClick={() => this.toggleClick()}>
                {this.renderCard()}
            </div>
        )
    }

}

export default GameCard

