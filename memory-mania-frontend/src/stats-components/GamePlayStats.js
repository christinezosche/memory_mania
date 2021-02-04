import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayStats extends Component {

    renderList = () => {
        let array = [...this.props.games]
        array.sort((a, b) => {
            return b.times_played - a.times_played
          });
        let shortArray = array.slice(0,5)
        return (
        <div>
        <ul>
        {shortArray.map(object => <li>{object.name} Memory, {object.times_played}</li>)}
        </ul>
        </div>
        )
    }

    render () {
        return (
    
        <div>
        {this.renderList()}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
 
export default connect(mapStateToProps)(PlayStats)