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

class Schedule extends React.Component {
	render () {
		return (
			<Container>
			Schedule
			</Container>
		);
	}
}

export default Schedule