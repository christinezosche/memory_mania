import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'
import GifSearch from './GifSearch'

class GameStarter extends Component {

  constructor() {
    super()
    this.state = {
        searchSubmitted: false
    }
  }

  submit = (searchTerm) => {
    this.props.fetchImages(searchTerm)
    this.setState({
      searchSubmitted: true
    })
  }
  
  componentDidMount () {
    this.setState({
      searchSubmitted: false
    })
  }

  render () {
    if (this.state.searchSubmitted === false) {
      return <div><GifSearch submit={this.submit} /></div>
    }
    else if (this.props.requesting === true) {
      return <h1>Loading...</h1>
    }
    else {
      return (
      <button className="start-button" onClick={() => this.props.startGame()}>
          Start Game!
      </button>
      )
    }
    }

  }

    
  const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return { fetchImages: (searchTerm) => dispatch(fetchImages(searchTerm)) }
  }
 
   
  export default connect(mapStateToProps, mapDispatchToProps)(GameStarter)
