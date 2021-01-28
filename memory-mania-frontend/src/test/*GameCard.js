import React, { Component } from 'react'
import CardFront from './card-components/CardFront'
import CardBack from './card-components/CardBack'
import CardBlank from './card-components/CardBlank'
import { connect } from 'react-redux';
import { addToCurrentPair, addToHoldImages } from '../actions/games'
import uuid from 'uuid';

class GameCard extends Component {

    constructor() {
        super()

        this.state = {
            id: uuid()
        }
    }

    renderCard = () => {
        if (this.hasBeenClicked()) {
            return <div className="game-card"><CardFront imageUrl={this.props.imageUrl} /></div>
        }
        else if (this.hasBeenMatched()) {
            return <div className="game-card"><CardBlank /></div>
        }
        else if (this.props.postClickDelay === true) {
            return <div className="game-card"><CardBack /></div>
        }
        else {
            return <div className="game-card" onClick={() => this.toggleClick()}><CardBack /></div>
        }
    }

    hasBeenMatched = () => {
        if (this.props.completedPairs.filter(id => id === this.state.id).length === 0) {
            return false
        }
        else {
            return true
        }
    }

    hasBeenClicked = () => {
        if (this.props.holdImages.filter(id => id === this.state.id).length === 0) {
            return false
        }
        else {
            return true
        }
    }

    toggleClick = () => {
        this.props.addToCurrentPair({id: this.state.id, imageId: this.props.imageId});
        this.props.addToHoldImages(this.state.id);
    }

    render () {
        return <div>{this.renderCard()}</div>
    }
}

const mapStateToProps = state => {
    return state
  }
   
const mapDispatchToProps = dispatch => {
    return {
      addToHoldImages: (id) => dispatch(addToHoldImages(id)),
      addToCurrentPair: (imageObject) => dispatch(addToCurrentPair(imageObject))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)

