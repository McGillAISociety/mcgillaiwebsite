import React from 'react'
import {Route, NavLink, Link, BrowserRouter as Router} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import styled from '@emotion/styled';

import Logo from '../home/assets/logo.svg';

const Container=styled('div')`

`;

const NavbarContent = styled('div')`
`;

class Navigation extends React.Component {

	render () {
		return (
      <Container>
        <NavbarContent>
        <Navbar inverse collapseOnSelect expand="md" bg="dark" className = 'navbarcustom navbar-toggleable-lg navbar-fixed-top'>
          
          <Navbar.Brand>
            <Link to='/'>
              <img
              src="/logo.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="McGillAI logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navtext'/>
          <Navbar.Collapse className = "navbar-collapse" id="basic-navbar">
            <Nav className = "mr-auto">
              <Nav.Link><Link to='/ourteam'><Navbar.Text className='navtext'>Our Team</Navbar.Text></Link></Nav.Link>
              <Nav.Link><Link to='/mais202'><Navbar.Text className='navtext'>MAIS202</Navbar.Text></Link></Nav.Link>
              <Nav.Link><Link to='/faq'><Navbar.Text className='navtext'>FAQ</Navbar.Text></Link></Nav.Link>
              <Nav.Link><a target="_blank" href= "https://medium.com/mcgill-artificial-intelligence-review"><Navbar.Text className='navtext'>Blog</Navbar.Text></a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </NavbarContent>
      </Container>
			
		);
	}
}

export default Navigation;