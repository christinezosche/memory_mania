import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route } from 'react-router-dom'
import CreateGame from './other-components/CreateGame';
import NavBar from './other-components/NavBar';
import GamesPage from './containers/GamesPage';
import PlayStats from './stats-components/PlayStats';
import { fetchGameTemplatesData } from './actions/fetchGameData'
import { connect } from 'react-redux'
import GameStats from './stats-components/GameStats';
import StatsPage from './stats-components/StatsPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchGameTemplatesData()
  }

  render() {
  return (
    <div className="App">
      <Router>
      <div>
            <NavBar />
            <Route exact path={"/"} render={() => <div>Home</div>} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} />} />
            <Route exact path={"/games/new"} component={CreateGame} />
            <Route exact path={"/stats"} component={StatsPage} />
            <Route exact path={"/gamestats"} component={GameStats} />
            <Route exact path={"/playstats"} component={PlayStats} />
      </div>
      </Router>
    </div>
  );
}
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { fetchGameTemplatesData: () => dispatch(fetchGameTemplatesData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
