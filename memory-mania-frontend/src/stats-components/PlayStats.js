import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PlayStats extends Component {

    renderMostPlayedList = () => {
        let array = [...this.props.games]
        array.sort((a, b) => {
            return b.times_played - a.times_played
          });
        let shortArray = array.slice(0,5)
        return (
        <div>
        <h3>Most Played Games</h3>
        
        {shortArray.map(object => <p key={this.props.games.indexOf(object)}><Link to={`/games/${this.props.games.indexOf(object)}`}>{object.name} Memory</Link>: {object.times_played} plays</p>)}
        
        </div>
        )
    }

    renderNewList = () => {
      let array = [...this.props.games]
      array.sort((a, b) => {
          return b.id - a.id
        });
      let shortArray = array.slice(0,5)
      return (
      <div>
      <h3>Newest Games</h3>
      
      {shortArray.map(object => <p key={this.props.games.indexOf(object)}><Link to={`/games/${this.props.games.indexOf(object)}`}>{object.name} Memory</Link></p>)}
      
      </div>
      )
  }

    render () {
        return (
    
        <div>
        {this.renderMostPlayedList()}
        {this.renderNewList()}
        <h3><Link to={'/games'}>See All Games</Link></h3>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
 
export default connect(mapStateToProps)(PlayStats)