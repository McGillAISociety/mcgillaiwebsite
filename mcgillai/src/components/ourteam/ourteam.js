import React from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

import Execs1718 from './17-18.js'
import Execs1819 from './18-19.js'
import Execs1920 from './19-20.js'

class OurTeam extends React.Component {
	render () {
		return (
			<div>
				<h1>Our Team</h1>
				<ul>
					<li><Link to="/ourteam/17-18">2017-2018</Link></li>
					<li><Link to="/ourteam/18-19">2018-2019</Link></li>
					<li><Link to="/ourteam/19-20">2019-2020</Link></li>
				</ul>

				<div>
					<Switch>
						<Redirect exact from="/ourteam" to="/ourteam/19-20" />
						<Route path="/ourteam/17-18" component={Execs1718} />
						<Route path="/ourteam/18-19" component={Execs1819} />
						<Route path="/ourteam/19-20" component={Execs1920} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default OurTeam