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

 import Grid from './assets/grid.svg'

const Container = styled('div')`
	${SectionBase};
`;

const SVGContainer = styled('img')`
	margin-left: auto;
  	margin-right: auto;
  	display: block;
  	max-height: 500px;
`;

const Heading = {
	fontSize: '48px',
	textAlign: 'center',
	margin: '0',
	padding: '100px 0 0 0'
};

class Stats extends React.Component {
	render () {
		return (
			<Container>
				<SectionContent columns={true}>
					<SectionLeftColumn>
						<SectionTextContent>
							<p style={Heading}>The McGill AI <br /> Community </p>
							<hr/>
						</SectionTextContent>
					</SectionLeftColumn>
					<SectionRightColumn>
						<SVGContainer src={Grid} />
					</SectionRightColumn>
				</SectionContent>
			</Container>
		);
	}
}

export default Stats