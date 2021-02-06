import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GameStats extends Component {

    renderBestTimeList = () => {
        let array = [...this.props.stats]
        array.sort((a, b) => {
            return a.time - b.time
          });
        let noAnonymous = array.filter(game => game.username !== '')
        let shortArray = noAnonymous.slice(0,5)
        return (
        <div>
        <h3>Top Stats - All Games</h3>
        <ol>
        {shortArray.map(object => <li key={this.props.games.indexOf(object)}>{object.username} - {object.name} Memory - {object.time}</li>)}
        </ol>
        </div>
        )
    }

    
    renderBestTimeForGamesList = (gameName) => {
        let array = [...this.props.stats]
        let filteredArray = array.filter(stat => stat.name === gameName) 
        filteredArray.sort((a, b) => {
            return a.time - b.time
          });
        let noAnonymous = filteredArray.filter(game => game.username !== '')
        let shortArray = noAnonymous.slice(0,5)
        return (
        <div>
        <h3>Top Stats - {gameName} Memory</h3>
        <ol>
        {shortArray.map(object => <li key={this.props.games.indexOf(object)}>{object.username} - {object.time}</li>)}
        </ol>
        </div>
        )
    }

    renderTopGameStats = () => {
        let games = [...this.props.games]
        games.sort((a, b) => {
            return b.times_played - a.times_played
          });
        let topGames = games.slice(0,3)
        return topGames.map(game => this.renderBestTimeForGamesList(game.name))
    }

    render () {
        return (
    
        <div>
        {this.renderBestTimeList()}
        {this.renderTopGameStats()}
        <h3><Link to={'/stats'}>See More Stats</Link></h3>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
 
export default connect(mapStateToProps)(GameStats)