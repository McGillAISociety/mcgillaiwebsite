import React from 'react'
import styled from '@emotion/styled'

import Landing from './landing.js'
import About from './about.js'
import Stats from './stats.js'
import Activities from './activities.js'
import Schedule from './schedule.js'

import Background from './background.jpg'

const Container = styled('div')`
	background-image: url(${Background});
	background-size: cover; /* or contain depending on what you want */
  	background-position: center center;
  	background-repeat: no-repeat;
`;

class Home extends React.Component {
	render () {
		return (
			<Container>
				<Landing></Landing>
				<About></About>
				<Stats></Stats>
				<Activities></Activities>
				<Schedule></Schedule>
			</Container>
		);
	}
}

export default Home