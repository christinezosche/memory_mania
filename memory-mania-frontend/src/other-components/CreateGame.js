import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addGameToStore, resetComplete } from '../actions/fetchGameData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Input from './Input'

class CreateGame extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            creator: '',
            images: {
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            image6: '',
            image7: '',
            image8: '',
            image9: '',
            image10: '',
            image11: '',
            image12: ''
            }       
        }

    }

    handleSubmit = (event) => {
        let gameData = {
            "name": this.state.name,
            "creator": this.state.creator,
            "imageUrls": [this.state.image1, this.state.image2, this.state.image3, this.state.image4, this.state.image5, this.state.image6, this.state.image7, this.state.image8, this.state.image9, this.state.image10, this.state.image11, this.state.image12]
        };
   
       let configObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(gameData)
              };
        
        if (this.state.valid === true) {
        this.props.addGameToStore(configObj)
        }

    event.preventDefault()
    }

    checkObjects = () => {
        if (Object.values(this.state.images).includes('')) {
            return true }
        else {
            return false
        }
    }

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    checkIfValid = () => {
       if (this.state.image1 === '') {
           return false
       }
       else {
           return true
       }
    }

    renderError = () => {
        if (this.props.error === true) {
            return <h5 style={styles.error}>Name already taken. Choose another name.</h5>
        }
    }

    setImage = (imageId, url) => {
        this.setState({
            [imageId]: url
        })
    }

    resetComplete = () => {
        this.props.resetComplete()
    }

    render () {
        debugger
        if (this.props.successfulSubmit === false) {
        return (
            <div>
            <Container fluid>

                <form onSubmit={this.handleSubmit}>

                <Row>
                <Col></Col>
                <Col xs={4}><h5><label style={styles.form}>Enter a name for this game:</label></h5>
                <input id="name" name="name" type="text" onChange={event => this.handleInputChange(event)} value={this.state.name} placeholder={`i.e., "Cats on Vacation"`} required /></Col>
                <br></br>
                <Col xs={4}><h5><label style={styles.form}>Enter your name:</label></h5>
                <input id="creator" name="creator" type="text" onChange={event => this.handleInputChange(event)} value={this.state.creator} placeholder={`i.e., "MemoryManiac1"`} required /></Col>
                <br></br>
                <Col></Col>
                </Row>
                <Row>
                <Col></Col>   
                <Col xs={6}><h5><label style={styles.form}>Enter image URLs:</label></h5>
                </Col>
                <Col></Col>
                </Row>
                <Row>
                <Col></Col>   
                <Col xs={2}>


                {/* <input id="image1" name="image1" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image1} 
                placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br> */}
                <Input image={'image1'} setImage={this.setImage} />

                <input id="image2" name="image2" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image2} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image3" name="image3" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image3} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image4" name="image4" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image4} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image5" name="image5" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image5} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image6" name="image6" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image6} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                </Col>
                <Col xs={2}>
                <input id="image7" name="image7" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image7} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image8" name="image8" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image8} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image9" name="image9" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image9} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image10" name="image10" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image10} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image11" name="image11" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image11} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                <input id="image12" name="image12" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image12} placeholder={`i.e., "https://myimage.com/image.jpg"`} required /><br></br>
                </Col>
                <Col></Col> 
                </Row>
                <br></br>
               
                <Button variant="outline-info" type="submit">Submit</Button>{' '}


                </form>
                {this.renderError()}
            </Container>
            </div>
        )
        }

        else {
            return (
                <h4 style={styles.h}><Link to={`/games/${this.props.games.length-1}`} onClick={this.resetComplete} >Play {this.props.games[this.props.games.length-1].name} Memory!</Link></h4>
            )
        }
    }

}

const styles = {

    form: {
      padding: '1rem',
      textAlign: "center"
  
    },
    error: {
        padding: '1rem',
        textAlign: "center",
        color: 'red'
    },
    h: {
        padding: '3rem',
        textAlign: "center"
    }
  }

const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return { addGameToStore: (object) => dispatch(addGameToStore(object)),
        resetComplete: () => dispatch(resetComplete())
    }
  }
     
export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)