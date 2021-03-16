import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,
  Route } from 'react-router-dom'
import CreateGame from './other-components/CreateGame';
import NavBar from './other-components/NavBar';
import GamesPage from './containers/GamesPage';
import { fetchGameTemplatesData, fetchStats } from './actions/fetchGameData'
import { connect } from 'react-redux'
import StatsPage from './stats-components/StatsPage';
import Home from './containers/Home'

class App extends Component {

  // constructor () {
  //   super() 
  //   this.state = {
  //     colorMode: true
  //   }
  // }

  // changeMode = () => {
  //   this.setState(previousState => {
  //     return {
  //       colorMode: !previousState.colorMode
  //     }
  //     })
  // }

  componentDidMount() {
    this.props.fetchGameTemplatesData()
    this.props.fetchStats()
  }

  render() {
  // if (this.state.colorMode === true) {
  return (
    <div className="App">
      <Router>
      <div>
            {/* <NavBar changeMode={this.changeMode}/> */}
            <NavBar />
            <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/games/new"} component={CreateGame} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} />} />
            <Route exact path={"/stats"} component={StatsPage} />
            </Switch>
      </div>
      </Router>
    </div>
  )
  /* }
  else {
    return (
    <div className="darkApp">
      <Router>
      <div>
            <NavBar changeMode={this.changeMode}/>
            <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/games/new"} component={CreateGame} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} />} />
            <Route exact path={"/stats"} component={StatsPage} />
            </Switch>
      </div>
      </Router>
    </div>
    )
  } */
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
