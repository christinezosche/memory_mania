import React, { Component } from 'react';
import { connect } from 'react-redux';

class EnterUsername extends Component {

    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    addUsername = (id, username) => {
        let configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
               "username": username
               })
          };
        fetch(`http://localhost:3000/games/` + id, configObj)
        .then((response) => response.json())
        .then((object) => {
        return object
        })
    }

    deleteScore = (id) => {
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
          };
        fetch(`http://localhost:3000/games/` + id, configObj)
    }

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.addUsername(this.props.gameId, this.state.username)
        event.preventDefault()
    }

    renderGameName = () => {
        if (this.props.name === 'nyt-memory') {
            return `New York Times Top Stories Memory`
        }
        else if (this.props.name === 'gif-memory') {
            return `GIF Memory`
        }
        else if (this.props.name === 'movie-tv-memory') {
            return `Trending TV & Movies Memory`
        }
    }

    render () {
        return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
        <h1>Your time: {this.props.time}</h1>
        <h2>You ranked __ in {this.renderGameName()}! Tell the world!</h2>

        <h3>Enter your name: </h3>
        <input id="username" name="username" type="text" onChange={event => this.handleInputChange(event)} value={this.state.username} placeholder={`i.e., "MemoryManiac1"`} />
        </label>
        <button type="submit">Enter</button>
        </form>
        <button onClick={() => this.deleteScore(this.props.gameId)}>Delete My Time</button>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return state
  }

export default connect(mapStateToProps)(EnterUsername)