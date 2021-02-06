import React, { Component } from 'react'
import GameCards from './GameCards'
import GameStarter from './GameStarter'
import GameEnder from './GameEnder'
import Timer from './Timer'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { setData, clearGameData, setGameName } from '../actions/games';

class Game extends Component {

    constructor() {
        super()

        this.state = {
            id: uuid(),
            newGame: true,
            images: []
        }
    }

    startNewGame = () => {
        this.props.clearGameData()
        let newId = uuid();
        this.setState({
            id: newId,
            newGame: true
        })
        this.props.incrementTimesPlayed(this.props.gameId)
    }


    startGame = () => {
        this.setImages(this.props.imageUrls)
        this.setState({
            newGame: false
        })
        this.props.setData(this.state.id)
    }

    setImages = (array) => {
        let doubledArray = [...array, ...array]
        let imageObjects = doubledArray.map(item => {
         let newObject = {
            "url": item,
            "id": uuid(),
            "imageId": doubledArray.indexOf(item)
          };
          return newObject;
         });


        let randomizedArray = this.shuffle(imageObjects)

        this.setState({
            images: randomizedArray
        })
    }

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    
    componentWillUnmount = () => {
        this.props.clearGameData()
        this.props.setGameName('')
    }
    
    render () {
        if (this.state.newGame === true) {
            return <div className="game-container"><GameStarter startGame={this.startGame} /></div>
        }
        else if (this.props.gameComplete === true) {
            return <div className="game-container"><GameEnder startNewGame={this.startNewGame} /></div>
        }
        else {
        return (
        <div>
        <div className="timer"><Timer /></div>
        <div className="game-container"><GameCards images={this.state.images} /></div>
        </div>
        )
        }
    }


}

const mapStateToProps = state => {
    return state
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      setData: (object) => dispatch(setData(object)),
      clearGameData: () => dispatch(clearGameData()),
      setGameName: (name) => dispatch(setGameName(name))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game)