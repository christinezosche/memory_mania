import React, { Component } from 'react'

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
                this.setState(({ minutes }) => ({
                    minutes: minutes + 1,
                    seconds: 0
                }))
            }
            else {
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }))
            }
        }, 1000)
    }

    stopTimer = () => {
        clearInterval(this.myInterval)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render () {
        const { minutes, seconds } = this.state
        return (
            <div><h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1></div>
        )
    }
}

export default Timer