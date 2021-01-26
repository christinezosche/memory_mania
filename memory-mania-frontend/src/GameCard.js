import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

class GameCard extends Component {

    constructor() {
        super()

        this.state = {
            hasBeenClicked = false
        }
    }

    renderCard = () => {
    if (this.state.hasBeenClicked = false) {
        return <CardBack />;
        }
        return <CardFront imageUrl={this.props.imageUrl} />
    }

    toggleClick = () => {
        if (this.state.hasBeenClicked = false) {
            this.setState({
                hasBeenClicked = true
            });
        }
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

