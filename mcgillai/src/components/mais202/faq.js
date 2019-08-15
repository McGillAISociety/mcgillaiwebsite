import React from 'react';
import styled from '@emotion/styled';

import { HeadingUnderline } from '../commonstyles.js';

const Container = styled('div')`
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