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
`;

const SVGContainer = styled('svg')`
	width: 100%;
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
						<SVGContainer viewBox="0 0 300 200">
							<defs>
    							<linearGradient id="red" x1="0%" y1="0%" x2="0%" y2="100%">
      							<stop offset="0%" stop-color="#CC0000" />
      							<stop offset="100%" stop-color="#6E2F62" />
    							</linearGradient>
  							</defs>

  							<defs>
    							<linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
      							<stop offset="0%" stop-color="#003399" />
      							<stop offset="100%" stop-color="#3399CC" />
    							</linearGradient>
  							</defs>

  							<defs>
    							<linearGradient id="purple" x1="0%" y1="0%" x2="0%" y2="100%">
      							<stop offset="0%" stop-color="#6E2F62" />
      							<stop offset="100%" stop-color="#003399" />
    							</linearGradient>
  							</defs>

							<g>
  								<polygon stroke="url(#red)" stroke-width="2" fill="none" points="50 1 95 25 95 75 50 99 5 75 5 25" />
								<text x="50" y="45" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat-ExtraBold" font-size="30" fill="#FFFFFF">12</text>
								<text x="50" y="65" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="10" fill="#FFFFFF">Past Sponsors</text>
							</g>

							<g transform= "translate(95, 0)">
  								<polygon stroke="url(#purple)" stroke-width="2" fill="none" points="50 1 95 25 95 75 50 99 5 75 5 25" />
								<text x="50" y="43" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat-ExtraBold" font-size="30" fill="#FFFFFF">18</text>
								<text x="50" y="63" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="8" fill="#FFFFFF">Executive Team </text>
								<text x="50" y="71" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="8" fill="#FFFFFF"> members </text>
							</g>

							<g transform= "translate(190, 0)">
  								<polygon stroke="url(#blue)" stroke-width="2" fill="none" points="50 1 95 25 95 75 50 99 5 75 5 25" />
								<text x="50" y="45" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat-ExtraBold" font-size="22" fill="#FFFFFF">2000+</text>
								<text x="50" y="65" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="10" fill="#FFFFFF">Subscribers</text>
							</g>

							<g transform= "translate(47, 81)">
  								<polygon stroke="url(#blue)" stroke-width="2" fill="none" points="50 1 95 25 95 75 50 99 5 75 5 25" />
								<text x="50" y="43" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat-ExtraBold" font-size="30" fill="#FFFFFF">50</text>
								<text x="50" y="63" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="7" fill="#FFFFFF">Academic disciplines</text>
								<text x="50" y="70" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="7" fill="#FFFFFF">represented</text>
							</g>

							<g transform= "translate(144, 81)">
  								<polygon stroke="url(#red)" stroke-width="2" fill="none" points="50 1 95 25 95 75 50 99 5 75 5 25" />
								<text x="50" y="44" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat-ExtraBold" font-size="30" fill="#FFFFFF">34%</text>
								<text x="50" y="64" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="6" fill="#FFFFFF">Graduate students</text>
								<text x="50" y="70" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="6" fill="#FFFFFF">attending ImplementAI</text>
							</g>
						</SVGContainer>
					</SectionRightColumn>
				</SectionContent>
			</Container>
		);
	}
}

export default Stats