import React from 'react'
import styled from '@emotion/styled'
import { PrimaryFont } from '../commonstyles'

const Title = styled('h1')`
  ${PrimaryFont};
  font-weight: 900;
  font-size: 60pt;
  background: -webkit-linear-gradient(#CC0033, #663366);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-left: 100px;
  padding-top: 100px;
`;

class Landing extends React.Component {
	render() {
		return (
			<div>
				<Title> MCGILL <br/> ARTIFICIAL <br/> INTELLIGENCE <br /> SOCIETY </Title>
			</div>
		);
	}
}

export default Landing