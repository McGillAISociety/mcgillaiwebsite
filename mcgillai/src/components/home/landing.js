import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import { 
  PrimaryFont, 
  SecondaryFont, 
  SectionBase,
  SectionContent,
  SectionLeftColumn,
  SectionRightColumn,
  SectionTextContent
 } from '../commonstyles'

 import Logo from './assets/logo.svg';

const Container = styled('div')`
  ${SectionBase};
`;

const Column = styled('div')`
  ${SecondaryFont};
  font-size: 32px;
  float: left;
  width: 50%;
  max-height: 600px;
  box-sizing: border-box;
  padding: 0px 30px;

  @media screen and (max-width: 1260px) {
      width: 100%;
  }
  > p {
    margin: 0px;
    padding: 0px;
  }
`;

const Icon = styled('img')`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-height: 500px;
`;

const Title = styled('h1')`
  ${PrimaryFont};
  font-weight: 900;
  font-size: 60pt;
  background: -webkit-linear-gradient(#CC0033, #663366);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-left: 80px;
  padding-top: 30px;

  @media screen and (max-width: 1260px) {
      display: none;
  }

`;

class Landing extends React.Component {
	render() {
		return (
			<Container>
        <Column>
				  <Title> MCGILL <br/> ARTIFICIAL <br/> INTELLIGENCE <br /> SOCIETY </Title>
        </Column>
        <Column>
          <Icon src={Logo}/>
        </Column>
			</Container>
		);
	}
}

export default Landing