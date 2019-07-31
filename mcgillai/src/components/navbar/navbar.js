import React from 'react'
import {Route, NavLink, BrowserRouter as Router} from 'react-router-dom'

class NavBar extends React.Component {
	render () {
		return (
			<div>
				<ul>
					<li><NavLink exact activeClassName="active" to="/">Home </NavLink></li>
					<li><NavLink activeClassName="active" to="/ourteam">Our Team</NavLink></li>
					<li><NavLink activeClassName="active" to="/mais202">MAIS202</NavLink></li>
					<li><a href="https://medium.com/mcgill-artificial-intelligence-review" target="_blank">Blog</a></li>
					<li><NavLink activeClassName="active" to="/sponsors">Sponsors </NavLink></li>
					<li><NavLink activeClassName="active" to="/contact">FAQ/Contact </NavLink></li>
				</ul>
			</div>
		);
	}
}

export default NavBar