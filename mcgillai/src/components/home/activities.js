import React from 'react'
import styled from '@emotion/styled'

import { 
	PrimaryFont, 
	SecondaryFont, 
	SectionBase,
	SectionContent,
	SectionLeftColumn,
	SectionRightColumn,
	SectionTextContent
 } from '../commonstyles'

const Container = styled('div')`
	${SectionBase};
	font-size: 30pt;
`;

class Activities extends React.Component {
	render () {
		return (
			<Container>
			Activities
			</Container>
		);
	}
}

export default Activities