import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

class GameCard extends Component {

    render () {
    return (
        <div className="game-card">
            <CardFront imageUrl={this.props.imageUrl} />
            <CardBack />
        </div>

    )
    }

}

export default GameCard

