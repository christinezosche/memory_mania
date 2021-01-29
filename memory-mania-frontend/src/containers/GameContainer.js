
import React, { Component } from 'react'
import Game from '../game-components/Game'

class GameContainer extends Component {

    constructor() {
        super()

        this.state = {
            images: [{url: 'https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg', imageId: '1'}, 
            {url: 'https://www.port.ac.uk/-/media/images/news-events-and-blogs/news/2020/october/cat-narrow-eyes-400x600.jpg', imageId: '2'}, 
            {url: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg', imageId: '3'},
            {url: 'https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3.jpg', imageId: '4'}, 
            {url: 'https://images.squarespace-cdn.com/content/v1/55c945e0e4b04386fb9f8162/1531837146897-RJA7PBBKEMGJWGAGDA2B/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/cute-3252251.jpg?format=2500w', imageId: '5'}, 
            {url: 'https://random.dog/e3c2b42a-0b7e-475f-8186-e3f620464f41.jpg', imageId: '6'},
            {url: 'https://media2.giphy.com/media/BzyTuYCmvSORqs1ABM/200w.webp?cimageId=ecf05e47br9cfdjcm4n9st5z94re6mwljeaqce3yuifhdd4n&rimageId=200w.webp', imageId: '7'}, 
            {url: 'https://random.dog/fb5524fa-28f5-42e2-a60c-ddc413f099d1.jpg', imageId: '8'}, 
            {url: 'https://random.dog/bc1d0b93-34bb-4ce7-8b15-5adad0359213.jpg', imageId: '9'},
            {url: 'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg', imageId: '10'}, 
            {url: 'https://random.dog/image20_1.jpg', imageId: '11'}, 
            {url: 'https://random.dog/a1eba572-e557-474b-a023-e48ead3c2786.jpeg', imageId: '12'}]
        }
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

    render () {

        const pairedArray = [...this.state.images, ...this.state.images]
        const randomizedArray = this.shuffle(pairedArray)
        
        return (
        <div>
            <Game images={randomizedArray} />
        </div>
        )
    }

}

export default GameContainer