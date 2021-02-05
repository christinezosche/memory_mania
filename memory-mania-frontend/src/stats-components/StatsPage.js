import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatsPage extends Component {

    state = {
        gameStats: ''
    }

    componentDidMount () {
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        // .then(array => console.log(array))
        .then(array => this.setState({
            gameStats: array
        }))
    }

    renderBestTimeList = () => {
        let array = [...this.state.gameStats]
        array.sort((a, b) => {
            return a.time - b.time
          });
        let shortArray = array.slice(0,25)
        return (
        <div>
        <h3>All Games</h3>
        <ol>
        {shortArray.map(object => <li key={this.props.games.indexOf(object)}>{this.renderUsername(object)} - {object.name} - {object.time}</li>)}
        </ol>
        </div>
        )
    }

    
    renderBestTimeForGamesList = (gameName) => {
        let array = [...this.state.gameStats]
        let filteredArray = array.filter(stat => stat.name === gameName) 
        filteredArray.sort((a, b) => {
            return a.time - b.time
          });
        let shortArray = filteredArray.slice(0,25)
        return (
        <div>
        <h3>{gameName} Memory</h3>
        <ol>
        {shortArray.map(object => <li key={this.props.games.indexOf(object)}>{this.renderUsername(object)} - {object.time}</li>)}
        </ol>
        </div>
        )
    }

    renderUsername = (object) => {
        if (object.username === '') {
            return 'Anonymous User'
        }
        else {
            return object.username
        }
    }

    renderTopGameStats = () => {
        let games = [...this.props.games]
        games.sort((a, b) => {
            return b.times_played - a.times_played
          });
        let topGames = games.slice(0,15)
        return topGames.map(game => this.renderBestTimeForGamesList(game.name))
    }




    render () {
        return (
        <div>
        <h1>Top Stats</h1>
        {this.renderBestTimeList()}
        {this.renderTopGameStats()}

        </div>

        )
    }

}
const mapStateToProps = state => {
    return state
  }
 
export default connect(mapStateToProps)(StatsPage)