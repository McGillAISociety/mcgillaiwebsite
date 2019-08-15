import React from 'react';
import styled from '@emotion/styled';

import { HeadingUnderline } from '../commonstyles.js';

const Container = styled('div')`
`;

class Landing extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>FOR STUDENTS, BY STUDENTS </HeadingUnderline>
			</Container>
		);
	}
}

export default Landing;