import React from 'react'
import Button from 'react-bootstrap/Button';

class GifSearch extends React.Component {

    constructor() {
        super()

        this.state = {
        searchTerm: '' 
      };
    }

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.submit(this.state.searchTerm);
        event.preventDefault()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <br></br>
            <label>
            <h6>Enter a theme: </h6><input id="searchTerm" name="searchTerm" type="text" onChange={event => this.handleInputChange(event)} value={this.state.searchTerm} placeholder={`i.e., "cats"`}/>
            </label><br></br>
            <Button variant="outline-info" type="submit">Search</Button>{' '}
            </form>
        )
    }
}

export default GifSearch