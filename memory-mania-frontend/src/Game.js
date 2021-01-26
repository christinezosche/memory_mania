import React, { Component } from 'react'
import GameCard from './GameCard'

class Game extends Component {

    constructor() {
        super()

        this.state = {
            images: [{url: 'https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg', id: '1'}, 
            {url: 'https://www.port.ac.uk/-/media/images/news-events-and-blogs/news/2020/october/cat-narrow-eyes-400x600.jpg', id: '2'}, 
            {url: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg', id: '3'}],
            currentPair: [],
            completedPairs: []
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
        
        let randomizedArray = this.shuffle(this.state.images)

        return (
        <div className="gameContainer">
                {/* {randomizedArray.map((image) => <GameCard imageUrl={image.url} imageId={image.id}/>)} */}
                {randomizedArray.map((image) => <GameCard imageUrl={image.url} imageId={image.id}/>)}
        </div>
        )
    }


}

export default Game