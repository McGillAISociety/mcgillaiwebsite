import React, { Component } from 'react';
import { DATA } from './exec-profile.js';
import styled from '@emotion/styled'
import { Container, Row, Col } from 'react-grid-system';
import { SecondaryFont } from '../commonstyles.js';
import { HeadingUnderline } from '../commonstyles.js';

const Background = styled('div')`
	${SecondaryFont};
	background: #131218;
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

const Exec = () => (
	<Background>
		<Container>
			<HeadingUnderline> Our Team </HeadingUnderline>
			<Row>
				<Col sm={4}>
					{DATA.map((data, index) => {
						return (<div>
							<div>
								<img src={data.photo}
									className="center"
									height="215"
									width="215"></img>
								<h2>{data.name}</h2>
								<h3>{data.position}</h3>
								<p align="center">{data.bio}</p>
								Ï		</div>
						</div>)
					})}
				</Col>

			</Row>
		</Container>
	</Background>
);
export default Exec;