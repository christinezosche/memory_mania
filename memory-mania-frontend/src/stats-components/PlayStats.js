import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class PlayStats extends Component {

    renderMostPlayedList = () => {
        let array = [...this.props.games]
        array.sort((a, b) => {
            return b.times_played - a.times_played
          });
        let shortArray = array.slice(0,5)
        return (
        <div>
        <h5 style={styles.h}>Most Played Games</h5>
        <div className='list'>
        {shortArray.map(object => <p key={this.props.games.indexOf(object)}><Link to={`/games/${this.props.games.indexOf(object)}`}>{object.name} Memory</Link>: {object.times_played} plays</p>)}
        </div>
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
      <h5 style={styles.h}>Newest Games</h5>
      <div className='list'>
      {shortArray.map(object => <p key={this.props.games.indexOf(object)}><Link to={`/games/${this.props.games.indexOf(object)}`}>{object.name} Memory</Link></p>)}
      </div>
      </div>
      )
  }

    render () {
        return (
    
        <div>
        <Container fluid style={styles.list}>
        {this.renderMostPlayedList()}
        <br></br>
        {this.renderNewList()}
        <br></br>
        <h4 style={styles.h}><Link to={'/games'}>See All Games</Link></h4>
        </Container>
        </div>
        )
    }
}
const styles = {
  list: {
  //   borderRadius: 55,
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
 
export default connect(mapStateToProps)(PlayStats)