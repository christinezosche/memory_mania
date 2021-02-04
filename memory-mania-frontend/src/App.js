import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import CreateGame from './other-components/CreateGame';
import NavBar from './other-components/NavBar';
import GamesPage from './containers/GamesPage';
import { fetchGameTemplatesData } from './actions/fetchGameData'
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    this.props.fetchGameTemplatesData()
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar />
            <Route exact path={"/"} render={() => <div>Home</div>} />
            <Route path='/games' render={routerProps => <GamesPage {...routerProps} />} />
            <Route exact path={"/new"} component={CreateGame} />
      </BrowserRouter>
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
