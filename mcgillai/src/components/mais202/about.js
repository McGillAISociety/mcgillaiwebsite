import React from 'react';
import styled from '@emotion/styled';

import { 
	HeadingUnderline,
	SectionBase
 } from '../commonstyles.js';

const Container = styled('div')`
	${SectionBase};
`;

class About extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>ABOUT MAIS202</HeadingUnderline>
			</Container>
		);
	}
}

export default About;