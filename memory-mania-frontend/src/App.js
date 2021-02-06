import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route } from 'react-router-dom'
import CreateGame from './other-components/CreateGame';
import NavBar from './other-components/NavBar';
import GamesPage from './containers/GamesPage';
import { fetchGameTemplatesData, fetchStats } from './actions/fetchGameData'
import { connect } from 'react-redux'
import StatsPage from './stats-components/StatsPage';
import Home from './other-components/Home'

class App extends Component {

  componentDidMount() {
    this.props.fetchGameTemplatesData()
    this.props.fetchStats()
  }

  render() {
  if (this.props.requesting === true) {
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    );
  }
  else {
  return (
    <div className="App">
      <Router>
      <div>
            <NavBar />
            <Route exact path={"/"} component={Home} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} />} />
            <Route exact path={"/games/new"} component={CreateGame} />
            <Route exact path={"/stats"} component={StatsPage} />
      </div>
      </Router>
    </div>
  );
  }
}
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { fetchGameTemplatesData: () => dispatch(fetchGameTemplatesData()),
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
