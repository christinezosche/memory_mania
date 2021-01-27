import React, { Component } from 'react'
import GameCard from './GameCard'

class Game extends Component {

    constructor() {
        super()

        this.state = {
            // images: [{url: 'https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg', id: '1'}, 
            // {url: 'https://www.port.ac.uk/-/media/images/news-events-and-blogs/news/2020/october/cat-narrow-eyes-400x600.jpg', id: '2'}, 
            // {url: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg', id: '3'},
            // {url: 'https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3.jpg', id: '4'}, 
            // {url: 'https://images.squarespace-cdn.com/content/v1/55c945e0e4b04386fb9f8162/1531837146897-RJA7PBBKEMGJWGAGDA2B/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/cute-3252251.jpg?format=2500w', id: '5'}, 
            // {url: 'https://i.pinimg.com/originals/3f/88/b5/3f88b529ba55072842304f349e6ba26e.jpg', id: '6'}],
            currentPair: [],
            completedPairs: [],
            newTurn: false,
            gameComplete: false
        }
    }

    // shuffle = (array) => {
    //     let currentIndex = array.length, temporaryValue, randomIndex;
      
    //     while (0 !== currentIndex) {
      
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex -= 1;
      
    //       temporaryValue = array[currentIndex];
    //       array[currentIndex] = array[randomIndex];
    //       array[randomIndex] = temporaryValue;
    //     }
      
    //     return array;
    //   }

    addToCurrentPair = (imageId) => {
        this.setState({
            currentPair: [...this.state.currentPair, imageId]
        })
    }

    hasBeenMatched = (imageId) => {
        if (this.state.completedPairs.filter(id => id === imageId).length === 0) {
            return false
        }
        else {
            return true
        }
    }

    checkForPairs = () => {
        if (this.state.currentPair.length === 2) {
            if (this.state.currentPair[0] === this.state.currentPair[1]) {
                this.setState({
                    currentPair: [],
                    completedPairs: [...this.state.completedPairs, this.state.currentPair[0]],
                    newTurn: true
                })
    
            }
            else {
                this.setState({
                    currentPair: [],
                    newTurn: true
                })
            }
        }
        else if (this.state.newTurn === false) {
        }
        else {
            this.setState({
                newTurn: false
            })
        }
    }

    render () {

        return (
        <div className="game-container">
                {this.props.images.map((image) => <GameCard imageUrl={image.url} imageId={image.id} addToCurrentPair={this.addToCurrentPair} currentPair={this.state.currentPair} checkForPairs={this.checkForPairs} hasBeenMatched={this.hasBeenMatched} postClickDelay={this.state.postClickDelay} newTurn={this.state.newTurn} />)}
        </div>
        )

    }


}

export default Game