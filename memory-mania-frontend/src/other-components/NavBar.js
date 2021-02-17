import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

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
          </Navbar> 

      </div>
    )
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