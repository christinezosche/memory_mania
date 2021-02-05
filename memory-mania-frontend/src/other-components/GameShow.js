import React from 'react';
import GameContainer from '../containers/GameContainer'
import { connect } from 'react-redux';


 const GameShow = (props) => {
    const game = props.games[props.match.params.gameId]

        if (!game) {
          return null;
        }
        else {
        return <GameContainer game={game} /> 
        }
  
}

 const mapStateToProps = state => {
   return state
 }

 export default connect(mapStateToProps)(GameShow)
