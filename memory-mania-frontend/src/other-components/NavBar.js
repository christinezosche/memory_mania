import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
 
class NavBar extends React.Component {
  render() {
    return (
      <div>
         <Navbar variant="dark" className="nav-bar">
           <Nav>
          <Navbar.Brand href="/home">Memory Mania!</Navbar.Brand>
          </Nav>
            <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/stats">Stats</Nav.Link>
            </Nav>
          </Navbar> 

      </div>
    )
  }
}
 
export default NavBar;