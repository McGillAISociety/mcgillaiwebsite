import React from 'react'
import styled from '@emotion/styled'

import {
	ImageBackground
 } from '../commonstyles'

const Container = styled('div')`
	margin: auto;
  	position: relative;
  	display: block;
  	overflow: hidden;
	font-size: 30pt;
`;

const ImageGrid = styled('div')`
	font-size: 0;
`;

const ImageCell = styled('a')`
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

	@media screen and (max-width: 750px) {
		width: 50%;
	}


`;

const ImageBounds = styled('div')`
	position: absolute;
    top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 1;
	transition: opacity 500ms;
	background: ${props => props.red ? 'linear-gradient(to bottom,#722D60, #A81245)' : 'linear-gradient(to bottom,#6E2F62, #003399)'};
`;

const ImageText = styled('div')`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	color: white;
	text-align: center;
	opacity: 1;
	transition: opacity 500ms;

	> h2 {
		font-family: 'Montserrat-Bold';
		font-size: 30px;
		margin: 20px 0px;

		@media screen and (max-width: 1150px) {
			margin-bottom: 10px;
			font-size: 26px;
		}

		@media screen and (max-width: 1000px) {
			font-size: 20px;

		}
		@media screen and (max-width: 767px) {
			font-size: 16px;
			margin-bottom: 5px;
		}
	}

	> h3 {
		font-family: "Montserrat";
		font-size: 20px;
		@media screen and (max-width: 1150px) {
			font-size: 16px;
		}

		@media screen and (max-width: 767px) {
			margin-top: 0;
			font-size: 14px;

		}


		@media screen and (max-width: 575px) {
			font-size: 12px;
		}

		@media screen and (max-width: 350px) {
			font-size: 10px;
		}

	}

	@media screen and (max-width: 850px) {
		padding: 10px;
		padding-bottom: 5px;
	}
`;


class Resources extends React.Component {
	render () {
		return (
			<Container>
				<ImageGrid>

					<ImageCell href = "https://www.ajungmoon.com/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>McGill Responsible Autonomy & Intelligent Systems Ethics (RAISE)</h2>
							<h3>Led by Prof. AJung Moon, the lab investigates human-robot interaction, roboethics, and AI ethics.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://blogs.mcgill.ca/design-engineering-society/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds red = {true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>Reading Group on Design, Engineering, and Society (DES)</h2>
							<h3>The Reading Group on Design, Engineering, and Society (DES) is a joint initiative by Profs. Theodora Vardouli (Architecture) and AJung Moon (Electrical and Computer Engineering), aimed at fostering interdisciplinary conversations on social aspects of design and technology.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://www.cyberjustice.ca/en/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>Cyberjustice Lab</h2>
							<h3>The Cyberjustice Lab analyses the impact of technologies on justice and develops concrete technological tools that are adapted to the reality of the justice system.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://www.facebook.com/pages/category/School/McGill-AI-Law-492418731238015/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds red = {true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>McGill AI and Law</h2>
							<h3>Check this out if you're interested in the intersection between law and AI!</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://blogs.mcgill.ca/ai-law-mcgill/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>AI and Law Reading Group</h2>
							<h3>Speaker series organized by & at McGill in conjunction with the Cyberjustice Lab.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://montrealethics.ai/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>Montreal AI Ethics Institute (MAIEI)</h2>
							<h3>MAIEI’s mission is to help define humanity’s place in a world increasingly characterized and driven by algorithms. They publish tangible and applied technical and policy research in the ethical, safe and inclusive development of AI.</h3>
						</ImageText>
					</ImageCell>

				</ImageGrid>
			</Container>
		);
	}
}

export default Resources
