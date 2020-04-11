import React from 'react';
import styled from '@emotion/styled';
import { DATA } from './alumni-profile.js';


import { 
	HeadingUnderline,
	SectionBase
 } from '../commonstyles.js';

const Container = styled('div')`
	${SectionBase};
	width: 1200px;
	padding-left: 20px;
	overflow: hidden;
`;

const BannerContainer = styled('div')`
	height: 233px;
 	width: 3550px;
 	margin-bottom: 80px;
`;

const Image = styled('img')`
	height: 175px;
	width: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 10px;
`;

class Alumni extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>PAST ALUMNI</HeadingUnderline>
				<BannerContainer>
					{DATA.map((data, index) => {
					return (
							<Image src={data.photo}
								className="center"
							/>
					)
					})}
				</BannerContainer>
			</Container>
		);
	}
}

export default Alumni;