import React from 'react';
import { Route } from 'react-router-dom';
import GamesList from '../other-components/GamesList';
import GameShow from '../other-components/GameShow';
import { connect } from 'react-redux';

const GamesPage = (props) => (
    
        <div>
        <Route exact path={props.match.url} render={() => <GamesList games={props.games}/>} />
        <Route path={`${props.match.url}/:gameId`} render={routerProps => <GameShow {...routerProps} /> }/>
        </div>
)

 const mapStateToProps = state => {
     return state
   }
 
export default connect(mapStateToProps)(GamesPage)
