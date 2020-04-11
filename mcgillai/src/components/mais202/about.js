import React from 'react';
import styled from '@emotion/styled';

import { 
	HeadingUnderline,
	SectionBase,
	Question,
	Answer
 } from '../commonstyles.js';


const Column = styled('div')`
	font-size: 32px;
	display: inline-block;
	vertical-align:top;
	padding: 20px;
	width: 50%;

	
	@media screen and (max-width: 900px) {
    	width: 100%;
    	padding: 10px;
	}
`;

const ContentContainer = styled('div')`
	text-align: left;
	@media screen and (max-width: 1050px) {
		max-height: 600px;
		padding-left: 20px;
	}
`;

const ImageContainer = styled('div')`
	padding-bottom: 10px;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const Container = styled('div')`
	${SectionBase};
	padding-left: 70px;
	padding-bottom: 0;

	@media only screen and (max-width: 767px) {
	    padding-left: 20px;
	    padding-right: 20px;
    }
`;

class About extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>ABOUT MAIS202</HeadingUnderline>
				<ContentContainer>
				{/*<Column>
					<ImageContainer>
						<Image src={AboutImg} />
					</ImageContainer>
				</Column>*/}
					<Question> How it started: </Question>
					<Answer> To fill the lack of introductory AI courses for undergraduate students, the McGill AI Society designed an intensive, nine-week course with the sole intention of equipping 30 young, talented undergraduates with the skills required to land an AI position in industry. </Answer>
					<Question> How it works:</Question>
					<Answer> The MAIS 202 bootcamp is an accelerated survey course which aims to teach lower-year undergraduates the fundamentals of machine learning. In addition to weekly lectures and assignments, participants worked towards an individual final project which was presented at the McGill AI Project Fair.</Answer>
					<Question> Takeaways from MAIS 202:</Question>
					<Answer>MAIS 202 provides students with both theoretical and hands-on skills required for ML research and industry. Our dedicated team of academic lecturers and TPMs offer real-time mentorship and feedback, and there are other opportunities to network with other ML enthusiasts!</Answer>
				</ContentContainer>
			</Container>
		);
	}
}

export default About;