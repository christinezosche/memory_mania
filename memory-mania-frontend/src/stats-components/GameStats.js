import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class GameStats extends Component {

    renderBestTimeList = () => {
        let array = [...this.props.stats]
        array.sort((a, b) => {
            return a.time - b.time
          });
        let noAnonymous = array.filter(game => game.username !== '')
        let shortArray = noAnonymous.slice(0,5)
        return (
        <div className='list'>
        <h4 style={styles.h}>Top Stats</h4>
        <h6 style={styles.h}>All Games</h6>
        <ul>
        {shortArray.map(object => <li key={this.props.stats.indexOf(object)}>{object.username} - {object.name} Memory - {object.time}</li>)}
        </ul>
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
        <div className='list' key={gameName}>
        <h6 style={styles.h} key={gameName}>{gameName} Memory</h6>
        <ul>
        {shortArray.map(object => <li key={`${this.props.stats.indexOf(object)}${gameName}`}>{object.username} - {object.time}</li>)}
        </ul>
        <br></br>
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
        <Container fluid style={styles.list}>
        {this.renderBestTimeList()}
        <br></br>
        {this.renderTopGameStats()}
        <br></br>
        <h5 style={styles.h}><Link to={'/stats'}>See More Stats</Link></h5>
        </Container>
        </div>
        )
    }
}

const styles = {
  list: {
    padding: '1rem',
    textAlign: "left"

  },
  h: {
    textAlign: "center",
  }
}

const mapStateToProps = state => {
    return state
  }
 
export default connect(mapStateToProps)(GameStats)