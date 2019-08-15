import React from 'react';
import styled from '@emotion/styled';

import { HeadingUnderline } from '../commonstyles.js';

const Container = styled('div')`
`;

class Instructors extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>MEET YOUR INSTRUCTORS</HeadingUnderline>
			</Container>
		);
	}
}

export default Instructors;