import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import CreateGame from './other-components/CreateGame';
import NavBar from './other-components/NavBar';
import GamesPage from './containers/GamesPage';

class App extends Component {

  state = {
    games: {
      1: { id: 1, name: 'GIF', creator: '', imageUrls: [], times_played: 12},
      2: { id: 2, name: 'NYT Top Stories', creator: '', imageUrls: [], times_played: 5 },
      3: { id: 3, name: 'Trending TV & Movies', creator: '', imageUrls: [], times_played: 4 }
    }
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar />
            <Route exact path={"/"} render={() => <div>Home</div>} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} games={this.state.games}/>} />
            <Route exact path={"/games/new"} component={CreateGame} />
      </BrowserRouter>
    </div>
  );
}
}

export default App;
