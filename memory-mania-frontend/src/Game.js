import React, { Component } from 'react'
import GameCard from './GameCard'

class Game extends Component {

    constructor() {
        super()

        this.state = {
            images = [],
            currentPair = [],
            completedPairs = []
        }
    }

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    render () {
        let randomizedArray = this.shuffle(this.images)

        return (
        <div className="gameContainer">
                {randomizedArray.map((image) => <GameCard imageUrl={image.url} imageId={image.id}/>)}
        </div>
        )
    }


}

export default Game