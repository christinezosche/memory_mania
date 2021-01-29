import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'

class GameStarter extends Component {

  componentDidMount() {
    this.props.fetchImages()
  }


  render () {
    if (this.props.requesting === true) {
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
    return { fetchImages: () => dispatch(fetchImages()) }
  }
 
   
  export default connect(mapStateToProps, mapDispatchToProps)(GameStarter)
