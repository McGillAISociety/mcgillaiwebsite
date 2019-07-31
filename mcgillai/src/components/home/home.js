import React from 'react'
import styled from '@emotion/styled'

import Landing from './landing.js'
import About from './about.js'
import Stats from './stats.js'
import Activities from './activities.js'
import Schedule from './schedule.js'

class Home extends React.Component {
	render () {
		return (
			<div>
				<Landing></Landing>
				<About></About>
				<Stats></Stats>
				<Activities></Activities>
				<Schedule></Schedule>
			</div>
		);
	}
}

export default Home