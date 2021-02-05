import React, { Component } from 'react';
import GameStats from '../stats-components/GameStats';
import PlayStats from '../stats-components/PlayStats';
import Menu from './Menu'

class Home extends Component {

    render () {
    return (
        <div>
        <GameStats />
        <Menu />
        <PlayStats />
        </div>
    )
    }
}

export default Home