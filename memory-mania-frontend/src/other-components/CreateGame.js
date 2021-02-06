import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addGameToStore, resetComplete } from '../actions/fetchGameData'

class CreateGame extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            creator: '',
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
        this.props.addGameToStore(configObj)

    event.preventDefault()
    }

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    renderError = () => {
        if (this.props.error === true) {
            return <div className="error">Name already taken. Choose another name.</div>
        }
    }

    resetComplete = () => {
        this.props.resetComplete()
    }

    render () {

        if (this.props.successfulSubmit === false) {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Enter a name for this game:</label>
                <input id="name" name="name" type="text" onChange={event => this.handleInputChange(event)} value={this.state.name} placeholder={`i.e., "Cats on Vacation"`} required />

                <label>Enter your name:</label>
                <input id="creator" name="creator" type="text" onChange={event => this.handleInputChange(event)} value={this.state.creator} placeholder={`i.e., "MemoryManiac1"`} required />

                <label>Enter image URLs:</label>
                <input id="image1" name="image1" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image1} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image2" name="image2" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image2} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image3" name="image3" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image3} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image4" name="image4" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image4} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image5" name="image5" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image5} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image6" name="image6" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image6} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image7" name="image7" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image7} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image8" name="image8" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image8} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image9" name="image9" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image9} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image10" name="image10" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image10} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image11" name="image11" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image11} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />
                <input id="image12" name="image12" type="url" onChange={event => this.handleInputChange(event)} value={this.state.image12} placeholder={`i.e., "https://myimage.com/image.jpg"`} required />

                <button type="submit">Submit</button>
                </form>
                {this.renderError()}
            </div>
        )
        }

        else {
            return (
                 <Link to={`/games/${this.props.games.length-1}`} onClick={this.resetComplete} >Play {this.props.games[this.props.games.length-1].name} Memory!</Link>
            )
        }
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