import React from 'react'
import styled from '@emotion/styled'

import Landing from './landing.js'
import About from './about.js'
//import Instructors from './instructors.js'
//import Alumni from './alumni.js'
import FAQ from './faq.js'

const Container = styled('div')`
	background: #131218;
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