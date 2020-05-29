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
	left: 0;
	right: 0;
	padding: 20px;
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

					<ImageCell href = "https://www.mcgill.ca/cscds/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>CSCDS (Centre for Social and Cultural Data Science)</h2>
							<h3>CSCDS is a multi-disciplinary community of scholars who apply data science to research in the humanities and social sciences through training, networking and support.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "http://networkdynamics.org/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>Network Dynamics Lab</h2>
							<h3>The Network Dynamics Lab is led by Prof. Derek Ruths and aims to measure and model large-scale human behavior, such as those found within social platforms, NYT bestsellers, human communities, political parties, and ancient civilizations.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://txtlab.org/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>.txtLAB @ McGill</h2>
							<h3>.txtLAB applies statistical and machine learning techniques to the study of culture, with a focus on cultural inequality.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "http://www.aaronerlich.com/demotip-laboratory" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>demoTIP</h2>
							<h3>The DemoTIP laboratory applies state of the art research methods, such as machine learning, to bring answers to empirical problems in political science.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://www.policyanddatascience.org/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>Policy and Data Science Summer Program</h2>
							<h3>Held by CSCDS and the Max Bell School of Public Policy, the summer program trains students from non-technical backgrounds in data science. Students finish the program by applying their skills in a policy internship.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "https://www.facebook.com/McGillNeurotech/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>McGill Neuro Tech</h2>
							<h3>A student-run design team that participates in the NeuroTechX Student Clubs Competition each year, having won each year. Projects usually involve ML applications in neurotechnology.</h3>
						</ImageText>
					</ImageCell>

					<ImageCell href = "http://www.ece.mcgill.ca/~aemad2/" target='_blank' rel="noopener noreferrer" className='link'>
						<ImageBounds red={true} className="Bounds">
						</ImageBounds>
						<ImageText className="Text">
							<h2>McGill Computational Biology and Artificial Intelligence Lab</h2>
							<h3>A cool opportunity for anyone keen on AI and life sciences!</h3>
						</ImageText>
					</ImageCell>
				</ImageGrid>
			</Container>
		);
	}
}

export default Resources
