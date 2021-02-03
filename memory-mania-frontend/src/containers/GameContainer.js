
import React, { Component } from 'react'
import Game from '../game-components/Game'
import { connect } from 'react-redux';
import { setGameName } from '../actions/games'


class GameContainer extends Component {

    render () {
        if (this.props.name === '') {
            return (
                <div>
                <button className="select-button" onClick={() => this.props.setGameName('gif-memory')}>
                Play GIF Memory
                </button>
                <button className="select-button" onClick={() => this.props.setGameName('nyt-memory')}>
                Play NYT Top Stories Memory
                </button>
                <button className="select-button" onClick={() => this.props.setGameName('movie-tv-memory')}>
                Play Trending TV & Movies Memory
                </button>
                </div>

            )
        }
       
        return (
        <div><Game /></div>
        )
    }

}

const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return { setGameName: (name) => dispatch(setGameName(name)) }
  }
 
   
  export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)