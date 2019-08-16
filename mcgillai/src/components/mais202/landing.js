import React from 'react';
import styled from '@emotion/styled';

import { SectionBase,
		 HeadingUnderline } from '../commonstyles.js';

const Container = styled('div')`
	${SectionBase({
    heightPx: 600
  	})};
  	box-sizing: border-box;
`;

const Left = styled('div')`
	width: 40%
`;

const Right = styled('div')`
	width: 60%;
`;

const Title = styled('div')`
	font-family: 'Montserrat-Bold', monospace;
  	color: #FFFFFF;
  	text-align: center;

	> h1 {
		font-size: 100px;
	}

	> h3 {
		font-size: 32px;
	}

	> p {
		font-family: 'Montserrat', monospace;
		font-size: 24px;
	}
`;

class Landing extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>FOR STUDENTS, BY STUDENTS </HeadingUnderline>
				<Title>
					<Left>
						<h1>MAIS202</h1>
						<h3>ACCELERATED INTRODUCTION TO MACHINE LEARNING</h3>
						<p>2019-2020 Offerings: Fall 2019, Winter 2020</p>
					</Left>
					<Right>
					</Right>
				</Title>
			</Container>
		);
	}
}

export default Landing;