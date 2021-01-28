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
           // hasBeenClicked: false,
           // hasBeenMatched: false,
            //postClickDelay: false
        }

        // let newID = uuid();
        // this.setState({
        //     id: newID
        // })
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
        // }
        // else {
        //     return <div className="game-card" onClick={() => this.toggleClick()}><CardBack /></div>
        //     }
        // }
        // else {
        // return <div className="game-card"><CardFront imageUrl={this.props.imageUrl} /></div>
        // }
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

    // updateState = () => {
    //     if (this.props.hasBeenMatched(this.props.imageId)) {
    //             this.setState({
    //             hasBeenMatched: true,
    //             hasBeenClicked: false
    //             })
    //     }
    //     else if (this.state.hasBeenClicked === true) {
    //             this.setState({
    //             hasBeenClicked: false
    //         })
    //     }
    // }

    toggleClick = () => {
        // this.setState({
        //         hasBeenClicked: true
        //     });
        this.props.addToCurrentPair({id: this.state.id, imageId: this.props.imageId});
        this.props.addToHoldImages(this.state.id);

        //this.props.setPostClickDelay(true)        
        //setTimeout(() => { this.props.setPostClickDelay(false) }, 1500); 
    }

    // renderWithDelay = () => {
    //     this.props.setPostClickDelay(true)
    //     // this.setState({
    //     //     postClickDelay: true
    //     // });
    //     this.timer1 = setTimeout(() => { this.props.setPostClickDelay(false)
    //     }, 1500);
    //     this.timer2 = setTimeout(() => { this.updateState() }, 1600)
    // }

    // componentWillUnmount() {
    //     clearTimeout(this.timer1);
    //     clearTimeout(this.timer2);

    // }

    render () {
  
        // if (this.props.newTurn === true) {
        //     return <div>{this.renderWithDelay()}</div>
        // }
        // else {
        return <div>{this.renderCard()}</div>
        // }
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

