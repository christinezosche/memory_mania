
import React, { Component } from 'react'
import Game from '../game-components/Game'
import { connect } from 'react-redux';
import { setGameName } from '../actions/games'
import { fetchGifs, fetchMovies, fetchNyt } from '../actions/fetchImages'
import { setImageUrls } from '../actions/games'

class GameContainer extends Component {

    componentDidMount() {
        this.props.setGameName(this.props.gameName)
        this.incrementTimesPlayed()

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
              this.props.setImageUrls(this.props.image_urls)
          }
    }

    incrementTimesPlayed = () => {
        
    }

    render () {
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