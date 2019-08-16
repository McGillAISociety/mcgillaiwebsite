import React from 'react'
import styled from '@emotion/styled'

import Landing from './landing.js'
import About from './about.js'
import Stats from './stats.js'
import Activities from './activities.js'
import Schedule from './schedule.js'
import Sponsors from './sponsors.js'

import Background from './assets/background.jpg'

const Container = styled('div')`
	background-image: url(${Background});
	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
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
				<Sponsors></Sponsors>
			</Container>
		);
	}
}

export default Home