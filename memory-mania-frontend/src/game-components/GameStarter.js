import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGifs } from '../actions/fetchImages'
import GifSearch from './GifSearch'
import Button from 'react-bootstrap/Button';

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
  }

  render () {
    if (this.props.name === 'GIF') { 
      if (this.state.searchSubmitted === false) {
      return <div>
        <h1>{this.props.name} Memory</h1>
        <GifSearch submit={this.submit} />
        </div>
      } 
      else {
        return (
        <div>
  
        <h1>{this.props.name} Memory</h1>
        <Button variant="outline-info" onClick={() => this.props.startGame()}>Start Game!</Button>{' '}
        
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
      <h1>{this.props.name} Memory</h1>
      <Button variant="outline-info" onClick={() => this.props.startGame()}>Start Game!</Button>{' '}
      </div>
      )
    }
    }

  }

    
  const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return { 
      fetchGifs: (searchTerm) => dispatch(fetchGifs(searchTerm))
            }
  }
 
   
  export default connect(mapStateToProps, mapDispatchToProps)(GameStarter)
