import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GamesList from '../other-components/GamesList';
import GameShow from '../other-components/GameShow';
import { connect } from 'react-redux';

class GamesPage extends Component {

    renderList = () => {
        if (this.props.name === '') {
            return <GamesList games={this.props.games}/>
        }
    }

    render () {
        return (
    
        <div>
        {this.renderList()}
        <Route path={`${this.props.match.url}/:gameId`} render={routerProps => <GameShow {...routerProps} games={this.props.games} /> }/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
 
export default connect(mapStateToProps)(GamesPage)