
import React, { Component } from 'react'
import Game from '../game-components/Game'
import { connect } from 'react-redux';
import { setGameName } from '../actions/games'
import { fetchGifs, fetchMovies, fetchNyt } from '../actions/fetchImages'
import { setImageUrls } from '../actions/games'

class GameContainer extends Component {

    componentDidMount() {
        this.props.setGameName(this.props.gameName)

        if (this.props.gameName === 'NYT Top Stories') {
            this.props.fetchNyt()
          }
          else if (this.props.gameName === 'Trending TV & Movies') {
            this.props.fetchMovies()
          }
          else if (this.props.gameName === 'Cat') {
            this.props.fetchGifs('cat')
          }
          else if (this.props.gameName === 'GIF') {
          }
          else {
              this.props.setImageUrls(this.props.imageUrls)
          }
    }

    render () {
        // if (this.props.name === '') {
        //     return (
        //         <div>
        //         <button className="select-button" onClick={() => this.props.setGameName('GIF')}>
        //         Play GIF Memory
        //         </button>
        //         <button className="select-button" onClick={() => this.props.setGameName('NYT Top Stories')}>
        //         Play NYT Top Stories Memory
        //         </button>
        //         <button className="select-button" onClick={() => this.props.setGameName('Trending TV & Movies')}>
        //         Play Trending TV & Movies Memory
        //         </button>
        //         <button className="select-button" onClick={() => this.props.setGameName('Cat')}>
        //         Play Cat Memory
        //         </button>
        //         </div>

        //     )
        // }
       
        return (
        <div><Game /></div>
        )
    }

}

const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return { setGameName: (name) => dispatch(setGameName(name)),
        fetchGifs: (searchTerm) => dispatch(fetchGifs(searchTerm)),
        fetchMovies: () => dispatch(fetchMovies()),
        fetchNyt: () => dispatch(fetchNyt()),
        setImageUrls: (array) => dispatch(setImageUrls(array))
    }
  }
 
   
  export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)