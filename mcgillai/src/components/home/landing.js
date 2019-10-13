import React from 'react'
import styled from '@emotion/styled'

import { 
  PrimaryFont, 
  SecondaryFont, 
  SectionBase,
 } from '../commonstyles'

 import Logo from './assets/logo.svg';

const Container = styled('div')`
  ${SectionBase};
  display: block;
`;

const Column = styled('div')`
  ${SecondaryFont};
  font-size: 32px;
  float: left;
  width: 50%;
  max-height: 600px;
  box-sizing: border-box;
  padding: 0px 30px;
  margin-bottom: 40px;

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
  margin-top: 25px;
  padding-top: 75px;
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
  padding-top: 80px;
  margin-bottom: 30px;

  @media screen and (max-width: 1260px) {
      display: none;
  }

`;

const ButtonContainer = styled('div')`
	display: table;
  	margin-left: 80px;

`;

const SubscribeButton = styled('a')`
	display:inline-block;
	padding:0.35em 1.2em;
	border:0.1em solid #FFFFFF;
	margin:0 0.3em 0.3em 0;
	border-radius:0.12em;
	box-sizing: border-box;
	text-decoration:none;
	font-family: 'Helvetica Neue Bold Condensed', monospace;
	font-weight:300;
	font-size: 36px;
	color:#FFFFFF;
	text-decoration: none !important;
	text-align:center;
	transition: all 0.2s;

	:visited {
		color:#FFFFFF;
	}

	:hover {
		color:#000000;
        background-color:#FFFFFF;
	}

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
			    <ButtonContainer>
			    <SubscribeButton href="https://docs.google.com/forms/u/3/d/e/1FAIpQLScs1ADlyTZHnvbQPIftXhE2yGvqPGzyhhKq87q212ttkOmIaQ/viewform?usp=sf_link" target="_blank">BECOME A MEMBER</SubscribeButton>
	          </ButtonContainer>
	        </Column>
	        <Column>
	          <Icon src={Logo}/>
	        </Column>
		</Container>
		);
	}
}

export default Landing