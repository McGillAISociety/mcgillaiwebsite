import React from 'react'
import styled from '@emotion/styled'

import Landing from './landing.js'
import About from './about.js'
//import Instructors from './instructors.js'
//import Alumni from './alumni.js'
import FAQ from './faq.js'
import Background from '../home/assets/background.jpg'

const Container = styled('div')`
	background-image: url(${Background});
	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
 	background-repeat: no-repeat;
	padding-top: 100px;
`;

class Mais202 extends React.Component {
	render () {
		return (
			<Container>
				<Landing></Landing>
				<About></About>
				{/* //<Instructors></Instructors>
				//<Alumni></Alumni> */}
				<FAQ></FAQ>
			</Container>
		);
	}
}

export default Mais202