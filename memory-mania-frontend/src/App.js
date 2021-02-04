import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import CreateGame from './other-components/CreateGame';
import NavBar from './other-components/NavBar';
import GamesPage from './containers/GamesPage';

class App extends Component {

  state = {
    games: {
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/game_templates')
    .then(response => response.json())
    .then(result => this.setState({
      games: result
    })
    )
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar />
            <Route exact path={"/"} render={() => <div>Home</div>} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} games={this.state.games}/>} />
            <Route exact path={"/new"} component={CreateGame} />
      </BrowserRouter>
    </div>
  );
}
}

export default App;
