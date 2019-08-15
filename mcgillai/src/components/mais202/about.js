import React from 'react';
import styled from '@emotion/styled';

import { HeadingUnderline } from '../commonstyles.js';

const Container = styled('div')`
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