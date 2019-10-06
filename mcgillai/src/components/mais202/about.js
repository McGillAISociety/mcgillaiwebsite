import React from 'react';
import styled from '@emotion/styled';

import { 
	HeadingUnderline,
	SectionBase,
	ImageBackground
 } from '../commonstyles.js';

 import AboutImg from './assets/img/about.png';

const Column = styled('div')`
	font-size: 32px;
	display: inline-block;
	vertical-align:top;
	padding: 30px;
	width: 50%;

	
	@media screen and (max-width: 900px) {
    	width: 100%;
    	padding: 10px;
	}
`;

const ContentContainer = styled('div')`
	padding: 30px;
	text-align: center;
	@media screen and (max-width: 1050px) {
		max-height: 400px;
		padding-left: 20px;
	}
`;

const ImageContainer = styled('div')`
	padding-bottom: 10px;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const Image = styled('img')`
	max-width:100%;
	max-height:100%;
	padding: 20px;
	display:
	margin-left: auto;
	margin-right: auto;

`;

const Container = styled('div')`
	${SectionBase};
	padding-left: 70px;
`;

const Text = styled('p')`
	font-family: 'Montserrat';
	font-size: 20px;
	color: #e7e7e7;

	text-align: left;
`;

class About extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>ABOUT MAIS202</HeadingUnderline>
				<ContentContainer>
				<Column>
					<ImageContainer>
						<Image src={AboutImg} />
					</ImageContainer>
				</Column>
				<Column>
					<Text>
						Content: 
							> Relevance of 202; why it was started
							> Tangible results
							> Influence of the project
							> Educational Impact 

							Read more about MAIS 202: 
							> Syllabus
							> GitHub Repo
							> McGill Reporter link
					</Text>
				</Column>
				</ContentContainer>
			</Container>
		);
	}
}

export default About;