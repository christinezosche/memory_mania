import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super()
        this.state = {
            image: props.image,
            url: ''
        }
    }

    handleInputChange = event => {
        this.setState({
          url: event.target.value
        })
    }

    checkIfValid = () => {
        if (this.state.url.substring(0,8) !== "https://" || this.state.url.substring(0,7) !== "http://") {
           return false
        }
        else {
            return true
        }
    }

    render () {
        if (this.checkIfValid() === true) {
            this.props.setImage(this.state.image, this.state.url)
        }
        return (
            <input id={this.state.image} name={this.state.image} type="url" className={`input ${this.checkIfValid() ? "valid" : "invalid"}`}
            onChange={event => this.handleInputChange(event)} 
            value={this.state.url} placeholder={`i.e., "https://myimage.com/image.jpg"`} />
        )
    }
    
} 

export default Input










