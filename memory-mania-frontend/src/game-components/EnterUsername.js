import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUsername, deleteScore } from '../actions/fetchGameData'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

class EnterUsername extends Component {

    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    addUsername = (id, username) => {
        let configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
               "username": username
               })
          };

          this.props.addUsername(id, configObj)
    }

    deleteScore = (id) => {
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
          };
        this.props.deleteScore(id, configObj)
        this.props.changePopUpState()
    }

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.addUsername(this.props.statId, this.state.username)
        this.props.changePopUpState()
        event.preventDefault()
    }

    render () {
        return (
        <div>
        <Container fluid>
        <form onSubmit={this.handleSubmit}>
        
        <h2>You completed {this.props.name} Memory in {this.props.time}! Tell the world!</h2>
        
        <label>
        <h3 style={styles.h}>Enter your name: </h3> <input id="username" name="username" type="text" onChange={event => this.handleInputChange(event)} value={this.state.username} placeholder={`i.e., "MemoryManiac1"`} />
        </label>
        <br></br>
        <Button variant="outline-info" type="submit">Submit</Button>{' '}
       
        <Button variant="outline-info" onClick={() => this.deleteScore(this.props.statId)}>Delete My Time</Button>{' '}
        </form>
        </Container>
        </div>
        )
    }
}

const styles = {
  h: {
    color: '#51068f'
  }
}

const mapStateToProps = state => {
    return state
  }

const mapDispatchToProps = dispatch => {
    return { addUsername: (id, configObj) => dispatch(addUsername(id, configObj)),
      deleteScore: (id, configObj) => dispatch(deleteScore(id, configObj))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EnterUsername)