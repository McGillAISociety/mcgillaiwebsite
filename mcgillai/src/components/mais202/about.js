import React from 'react';
import styled from '@emotion/styled';

import { 
	HeadingUnderline,
	SectionBase,
	Answer,
	ImageBackground
 } from '../commonstyles.js';

 import AboutImg from './assets/img/about.jpg';

const Row = styled('div')`
	display: flex;
`;

const Column = styled('div')`
	flex: 1;
	padding: 1em;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const ImageContainer = styled('div')`
	display: inline-block;

	background: linear-gradient(to right,#722D60, #A81245);
	background-repeat: no-repeat;
	background-size: 75% 85%;
	background-position: 40% 20%;
	padding-left: 40px;
	padding-bottom: 10px;
`;

const Image = styled('img')`
	max-height: 600px;
	padding: 40px;
	margin-left: auto;
	margin-right: auto;
`;

const Container = styled('div')`
	${SectionBase};
`;

class About extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>ABOUT MAIS202</HeadingUnderline>
				<Row>
				<Column>
					<ImageContainer>
						<Image src={AboutImg} />
					</ImageContainer>
				</Column>
				<Column>
					<Answer>
						Content: 
							> Relevance of 202; why it was started
							> Tangible results
							> Influence of the project
							> Educational Impact 

							Read more about MAIS 202: 
							> Syllabus
							> GitHub Repo
							> McGill Reporter link
					</Answer>
				</Column>
				</Row>
			</Container>
		);
	}
}

export default About;