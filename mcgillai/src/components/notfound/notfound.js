import React from 'react'
import styled from '@emotion/styled'

import Background from '../home/assets/background.jpg'

const Container = styled('div')`
	background-image: url(${Background});
	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
 	background-repeat: no-repeat;
`;

class NotFound extends React.Component {
	render () {
		return (
			<Container>
				<h1>404 NOT FOUND</h1>
			</Container>
		);
	}
}

export default NotFound