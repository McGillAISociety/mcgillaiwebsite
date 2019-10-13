import React from 'react'
import styled from '@emotion/styled'

import { 
	SectionBase,
	SectionContent,
	SectionLeftColumn,
	SectionRightColumn,
	SectionTextContent
 } from '../commonstyles'

 import Grid from './assets/grid.svg'

const Container = styled('div')`
	${SectionBase};
    align-items: center;
`;

const SVGContainer = styled('img')`
	margin-left: auto;
  	margin-right: auto;
  	display: block;
  	max-height: 500px;
  	@media screen and (max-width: 600px) {
		
	}
`;

const Title = styled('p')`
	font-family: 'Montserrat-Bold';
	color: #FFFFFF;
	font-size: 48px;
	text-align: center;
	vertical-align: middle;
	margin: 0;
	padding: 50px 0 0 0;

	@media screen and (max-width: 600px) {
		padding: 0;
		font-size: 32px;
	}

`;

class Stats extends React.Component {
	render () {
		return (
			<Container>
				<SectionContent columns={true}>
					<SectionLeftColumn>
						<SectionTextContent>
							<Title>The McGill AI Community </Title>
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