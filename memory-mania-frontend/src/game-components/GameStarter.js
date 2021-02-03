import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGifs, fetchMovies, fetchNyt } from '../actions/fetchImages'
import GifSearch from './GifSearch'

class GameStarter extends Component {

  constructor() {
    super()
    this.state = {
        searchSubmitted: false
    }
  }

  submit = (searchTerm) => {
    this.props.fetchGifs(searchTerm)
    this.setState({
      searchSubmitted: true
    })
  }
  
  componentDidMount () {
    this.setState({
      searchSubmitted: false
    })

    if (this.props.name === 'nyt-memory') {
      this.props.fetchNyt()
    }
    else if (this.props.name === 'movie-tv-memory') {
      this.props.fetchMovies()
    }
    else if (this.props.name === 'cat-memory') {
      this.props.fetchGifs('cat')
    }
  }

  render () {
    if (this.props.name === 'gif-memory') { 
      if (this.state.searchSubmitted === false) {
      return <div><GifSearch submit={this.submit} /></div>
      } 
      else {
        return (
        <div>
        <button className="start-button" onClick={() => this.props.startGame()}>
          Start Game!
        </button>
        </div>
        )
        } 
    }
    else if (this.props.requesting === true) {
      return <h1>Loading...</h1>
    }
    else {
      return (
      <div>
      <button className="start-button" onClick={() => this.props.startGame()}>
          Start Game!
      </button>
      </div>
      )
    }
    }

  }

    
  const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return { fetchGifs: (searchTerm) => dispatch(fetchGifs(searchTerm)),
             fetchMovies: () => dispatch(fetchMovies()),
             fetchNyt: () => dispatch(fetchNyt())
            }
  }
 
   
  export default connect(mapStateToProps, mapDispatchToProps)(GameStarter)
