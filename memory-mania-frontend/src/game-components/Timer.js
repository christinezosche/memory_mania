import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setGameTime } from '../actions/games'

class Timer extends Component {

    constructor () {
        super()
        this.state = {
            minutes: 0,
            seconds: 0,
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds === 59) {
                this.setState({
                    minutes: minutes + 1,
                    seconds: 0
                })
            }
            else {
                this.setState({
                    seconds: seconds + 1
                })
            }
        }, 1000)
    }

    checkForGameOver = () => {
        if (this.props.completedPairs.length === 24) {
            this.stopTimer()
            this.props.setGameTime(`${this.state.minutes}:${this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}`)
        }
    }

    stopTimer = () => {
        clearInterval(this.myInterval)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    componentDidUpdate = () => {
        this.checkForGameOver()
    }

    render () {
        const { minutes, seconds } = this.state
        return (
            <div><h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1></div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      setGameTime: (time) => dispatch(setGameTime(time))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Timer)