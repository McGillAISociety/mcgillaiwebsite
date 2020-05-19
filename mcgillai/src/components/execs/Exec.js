import React from 'react';
import { DATA } from './exec-profile.js';
import styled from '@emotion/styled'
import { SecondaryFont } from '../commonstyles.js';
import { HeadingUnderline } from '../commonstyles.js';

const Container = styled('div')`
	${SecondaryFont};
 	padding-left: 70px;
 	padding-right: 20px;
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
		font-size: 18px;
		text-align: center;
		padding: 5;
		margin: 0;
	}

	@media only screen and (max-width: 767px) {
	    padding-left: 20px;
	    padding-right: 0;
    }

    @media only screen and (max-width: 767px) {
	    padding-left: 10px;
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
	padding: 20px;

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

const LinkedinButton = styled('a')`
	background: #cc0000;
	padding:0.5em 0.5em;
	border-radius:1.5em;
	box-sizing: border-box;
	text-decoration:none;
	color: white !important;
  	transition: opacity 0.2s;
  	text-decoration: none !important;

  	:hover {
    	opacity: 0.6;
  	}
`;

const Exec = () => (
	<Container>
			<HeadingUnderline className = 'content' id='top'> Our Team </HeadingUnderline>
			<GridContainer className = 'content--inner'>
			{DATA.map((data, index) => {
				return (<ImageContainer>
						<Image src={data.photo}
							className="center"
							/>
						<h2>{data.name}</h2>
						<h3>{data.position}</h3>
						<Text>{data.bio}</Text>
						<LinkedinButton
			            aria-label="Linkedin"
			            href={data.linkedin}
			            target="_blank"
			            rel="noopener noreferrer"
			             className='icon-linkedin'
			          />
				</ImageContainer>)
			})}
			</GridContainer>
	</Container>
);
export default Exec;
