import React, { Component } from 'react'
import GameCards from './*GameCards'
import GameStarter from './*GameStarter'
import Timer from './*Timer'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addGame } from '../actions/games';

class GameTest extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            time: '',
            id: '',
            newGame: true,
            //gameComplete: false,
           // disableGame: false
        }
    }

    startGame = () => {
        let newID = uuid();
        this.setState({
            newGame: false,
            id: newID
        })
    }

    // setGameTime = (time) => {
    //     this.setState({
    //         time: time,
    //         gameComplete: false,
    //        // disableGame: true
    //     })
    // }

    dispatchGame = () => {
        this.props.addGame(
            {name: this.state.name,
            id: this.state.id,
            time: this.state.time }
        )
    }

    setDelay = () => {
        setTimeout(() => { this.setState({
            gameComplete: true
        })}, 1000);
    }

    render () {
        if (this.state.newGame === true) {
            return <div className="game-container"><GameStarter startGame={this.startGame} /></div>
        }
        else {
        return (
        <div>
        <div className="timer"><Timer /></div>
        <div className="game-container"><GameCards images={this.props.images} /></div>
        </div>
        )
        }
    }


}

// const mapDispatchToProps = dispatch => ({
//   addGame: state => dispatch(addGame(state))
// })

export default connect(null, {addGame})(GameTest)