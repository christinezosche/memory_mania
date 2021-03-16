import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {

    // constructor () {
    //   super() 
    //   this.state = {
    //     colorMode: true
    //   }
    // }

    // handleClick = () => {
  
    //   this.props.changeMode()
    // }


  render() {
  return (
      <div>
         <Navbar className="nav-bar" style={styles.bar}>
           <Nav>
          <Navbar.Brand href="/" style={styles.brand}>Memory Mania!</Navbar.Brand>
          </Nav>
            <Nav>
            <Nav.Link href="/" style={styles.link}>Home</Nav.Link>
            <Nav.Link href="/games" style={styles.link}>Games</Nav.Link>
            <Nav.Link href="/stats" style={styles.link}>Stats</Nav.Link>
            </Nav>
          {/* <button onClick={this.handleClick}>Switch Color Mode</button> */}
          </Navbar> 

      </div>
    )
  }
}

const styles = {
  bar: {
    width: '100vw'
  },
  brand: {
    padding: '1rem',
    textAlign: "left",
    color: 'white'

  },
  link: {
    textAlign: "center",
    color: 'rgb(36, 156, 192)'
  }
}
export default NavBar;