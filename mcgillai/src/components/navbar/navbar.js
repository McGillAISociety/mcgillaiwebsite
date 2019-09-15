import React from 'react'
import {Route, NavLink, BrowserRouter as Router} from 'react-router-dom'
import styled from '@emotion/styled';

import Logo from '../home/assets/logo.svg';

const Container=styled('div')`

`;

const Bar = styled('ul')`
    list-style: none;
    margin: 0;
  	padding: 0;
  	overflow: hidden;
  	background: #131218;
  	position: fixed;
  	top: 0;
  	width: 100%;
  	z-index: 9;
    text-align: center;

  	> li {
  		float: left;
      width: 20%;
      .active {
        font-family: 'Montserrat';
        font-size: 24px;
        display: block;
        color: #CC0033;
        text-align: center;
        padding: 14px 16px;
        text-decoration: underline #cc0033;
      }
  		> a {
  			font-family: 'Montserrat';
  			font-size: 24px;
  			display: block;
  			color: white;
  			text-align: center;
  			padding: 14px 16px;
  			text-decoration: none;
  		}
  	}
`;

const Icon = styled('img')`
	width: 20%;
`;

class NavBar extends React.Component {
	render () {
		return (
			<Container>
				<Bar>
					<li><NavLink exact activeClassName="active" to="/"> <Icon src={Logo} /> </NavLink></li>
					<li><NavLink activeClassName="active" to="/ourteam">Our Team</NavLink></li>
					<li><NavLink activeClassName="active" to="/mais202">MAIS202</NavLink></li>
					<li><a href="https://medium.com/mcgill-artificial-intelligence-review" target="_blank">Blog</a></li>
					<li><NavLink activeClassName="active" to="/contact">FAQ </NavLink></li>
				</Bar>
			</Container>
		);
	}
}

export default NavBar