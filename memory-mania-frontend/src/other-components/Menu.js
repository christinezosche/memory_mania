import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Menu extends Component {

    renderFeaturedGames = () => {
        let array = [...this.props.games]
        let shortArray = array.slice(0,4)
        return (
        <div>
        <h1>Memory Mania!</h1>
        {shortArray.map(object => <h2 key={this.props.games.indexOf(object)}><Link to={`/games/${this.props.games.indexOf(object)}`}>{object.name} Memory</Link></h2>)}
        </div>
        )
    }

    render () {
        return (
            <div>
            {this.renderFeaturedGames()}
            <h3><Link to={'/games/new'}>Create Your Own Game!</Link></h3>
            </div>
        )
        }
    }

const mapStateToProps = state => {
        return state
      }
     
export default connect(mapStateToProps)(Menu)