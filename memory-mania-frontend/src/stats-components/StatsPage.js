import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

class StatsPage extends Component {

    renderBestTimeList = () => {
        let array = [...this.props.stats]
        array.sort((a, b) => {
            return a.time - b.time
          });
        let shortArray = array.slice(0,25)
        return (
        <div>
        <h3 style={styles.h}>All Games</h3>
        <ol>
        {shortArray.map(object => <li key={this.props.games.indexOf(object)}>{this.renderUsername(object)} - {object.name} Memory - {object.time}</li>)}
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
        let shortArray = filteredArray.slice(0,25)
        return (
        <div>
        <h3 style={styles.h}>{gameName} Memory</h3>
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
        <Container fluid style={styles.list}>
        <h1 style={styles.h}>Top Stats</h1>
        <br></br>
        {this.renderBestTimeList()}
        {this.renderTopGameStats()}
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
 
export default connect(mapStateToProps)(StatsPage)