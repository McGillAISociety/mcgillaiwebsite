import React, { Component } from 'react';
import { DATA } from './exec-profile.js';
import styled from '@emotion/styled'
import { SecondaryFont } from '../commonstyles.js';
import { HeadingUnderline } from '../commonstyles.js';

import Background from '../home/assets/background.jpg';

const Container = styled('div')`
	${SecondaryFont};
	background-image: url(${Background});
	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
 	background-repeat: no-repeat;
	padding: 70px;
	padding-top: 125px;
	h2 {
		color: #cc0000;
		font-family: montserrat-bold;
		text-align: center;
		padding: 0;
		margin: 0;
	}
	h3 {
		font-family: montserrat-bold;
		text-align: center;
		padding: 5;
		margin: 0;
	}

`;

const GridContainer = styled('div')`
	padding-top: 40px;
	text-align: center;
`;

const ImageContainer = styled('div')`
	width: 33.3%;
	display: inline-block;
	vertical-align:top;
	padding: 30px;

	@media screen and (max-width: 900px) {
    	width: 50%;
	}

	@media screen and (max-width: 767px) {
    	width: 100%;
	}
`;

const Image = styled('img')`
	height: 175px;
	width: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 10px;
`

const Text = styled('p')`
	padding: 10px;
	text-align: center;
	font-size: 16px;
`;

const Exec = () => (
	<Container>
			<HeadingUnderline> Our Team </HeadingUnderline>
			<GridContainer>
			{DATA.map((data, index) => {
				return (<ImageContainer>
						<Image src={data.photo}
							className="center"
							/>
						<h2>{data.name}</h2>
						<h3>{data.position}</h3>
						<Text>{data.bio}</Text>
				</ImageContainer>)
			})}
			</GridContainer>
	</Container>
);
export default Exec;