import React from 'react'
import styled from '@emotion/styled'

import { PrimaryFont, SecondaryFont, SectionTextContent } from '../commonstyles'

const Container = styled('div')`
	${SecondaryFont};
	font-size: 48px;
	text-align: center;
`;

const Column = styled('div')`
	${SecondaryFont};
	font-size: 32px;
	float: left;
	width: 33.33%;
	box-sizing: border-box;
    padding: 50px;

	@media screen and (max-width: 600px) {
    	width: 100%;
	}
`;

class About extends React.Component {
	render() {
		return (
			<Container>
				About Us <br/>
				<Column>
					Learn
					<SectionTextContent>
						We aim to make AI more accessible by hosting events, bootcamps, workshops, and producing blog articles that cover computer vision, NLP, and anything in between.
					</SectionTextContent>
				</Column>
				<Column>
					Foster Community
					<SectionTextContent>
						We want to make learning AI fun. Want to talk to a prof, but too scared to speak up in class? Come to our research talks, surround yourself with like minded people at revision sessions and fun community building events. 
					</SectionTextContent>
				</Column>
				<Column>
					Exposure
					<SectionTextContent>
						We aim to make AI more accessible by holding biweekly workshops and research talks that cover anything from computer vision, NLP, and anything in between. We also hold MAIS 202 - an ML fundamentals bootcamp - once per semester.
					</SectionTextContent>
				</Column>
			</Container>
		);
	}
}

export default About