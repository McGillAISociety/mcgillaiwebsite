import React from 'react';
import styled from '@emotion/styled';


import { 
	HeadingUnderline,
	SectionBase
 } from '../commonstyles.js';

const Container = styled('div')`
	${SectionBase};
`;

class Alumni extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>PAST BOOTCAMPEES</HeadingUnderline>

			</Container>
		);
	}
}

export default Alumni;