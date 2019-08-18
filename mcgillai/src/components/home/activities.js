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

 import Mais202 from './activities-img/mais202.jpg';
 import ImplementAI from './activities-img/implementai.jpg';
 import ResearchTalks from './activities-img/researchtalks.jpg';

const Container = styled('div')`
	${SectionBase};
	font-size: 30pt;
`;

const ImageGrid = styled('div')`
	font-size: 0;
`;

const ImageBackground = styled('div')`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: -webkit-transform 500ms;
	transition: transform 500ms;
	transition: transform 500ms, -webkit-transform 500ms;	
`;

const ImageCell = styled('div')`
	display: inline-block;
	vertical-align: top;
	width: 33.33%;
	position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:after {
		content: '';
		display: block;
		padding-top: 100%;
	}

	&:hover .Background {
		-webkit-transform: scale(1.025);
		transform: scale(1.025);
	}

	&:hover .Bounds {
		opacity: 0.6;
	}

	&:hover .Text {
		opacity: 1;
	}

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const ImageBounds = styled('div')`
	position: absolute;
    top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	transition: opacity 500ms;
	background: ${props => props.red ? 'linear-gradient(to bottom,#722D60, #A81245)' : 'linear-gradient(to bottom,#6E2F62, #003399)'};
`;

const ImageText = styled('div')`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 60px 40px;
	color: white;
	text-align: center;
	opacity: 0;
	transition: opacity 500ms;

	> h2 {
		font-family: 'Montserrat-Bold';
		font-size: 30px;
		margin: 20px 0px;
	}

	> h3 {
		font-family: "Montserrat";
		font-size: 20px;
		
	}
`;


class Activities extends React.Component {
	render () {
		return (
			<Container>
				<ImageGrid>

					<ImageCell>
						<ImageBackground className="Background" style={{backgroundImage: `url(${Mais202})`}}> </ImageBackground>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>MAIS202 Bootcamp (Winter 2019)</h2>
							<h3>Launched by 13 passionate students, MAIS 202 is an eight week bootcamp that teaches lower year undergraduates ML fundamentals. <br /> <br /> Learn More >> </h3>
						</ImageText>
					</ImageCell>

					<ImageCell>
						<ImageBackground className="Background" style={{backgroundImage: `url(${ImplementAI})`}}> </ImageBackground>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>MAIS202 Bootcamp (Winter 2019)</h2>
							<h3>Launched by 13 passionate students, MAIS 202 is an eight week bootcamp that teaches lower year undergraduates ML fundamentals. <br /> <br /> Learn More >> </h3>
						</ImageText>
					</ImageCell>

					<ImageCell>
						<ImageBackground className="Background" style={{backgroundImage: `url(${ResearchTalks})`}}> </ImageBackground>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>MAIS202 Bootcamp (Winter 2019)</h2>
							<h3>Launched by 13 passionate students, MAIS 202 is an eight week bootcamp that teaches lower year undergraduates ML fundamentals. <br /> <br /> Learn More >> </h3>
						</ImageText>
					</ImageCell>

					<ImageCell>
						<ImageBackground className="Background" style={{backgroundImage: `url(${Mais202})`}}> </ImageBackground>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>MAIS202 Bootcamp (Winter 2019)</h2>
							<h3>Launched by 13 passionate students, MAIS 202 is an eight week bootcamp that teaches lower year undergraduates ML fundamentals. <br /> <br /> Learn More >> </h3>
						</ImageText>
					</ImageCell>

					<ImageCell>
						<ImageBackground className="Background" style={{backgroundImage: `url(${ImplementAI})`}}> </ImageBackground>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>MAIS202 Bootcamp (Winter 2019)</h2>
							<h3>Launched by 13 passionate students, MAIS 202 is an eight week bootcamp that teaches lower year undergraduates ML fundamentals. <br /> <br /> Learn More >> </h3>
						</ImageText>
					</ImageCell>

					<ImageCell>
						<ImageBackground className="Background" style={{backgroundImage: `url(${ResearchTalks})`}}> </ImageBackground>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>MAIS202 Bootcamp (Winter 2019)</h2>
							<h3>Launched by 13 passionate students, MAIS 202 is an eight week bootcamp that teaches lower year undergraduates ML fundamentals. <br /> <br /> Learn More >> </h3>
						</ImageText>
					</ImageCell>
				</ImageGrid>
			</Container>
		);
	}
}

export default Activities