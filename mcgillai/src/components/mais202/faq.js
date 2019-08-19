import React from 'react';
import styled from '@emotion/styled';

import { 
	HeadingUnderline,
	SectionBase
 } from '../commonstyles.js';

const Container = styled('div')`
	${SectionBase};
`;

class FAQ extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>MAIS202 FAQ </HeadingUnderline>
			</Container>
		);
	}
}

export default FAQ;