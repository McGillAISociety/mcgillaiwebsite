import React from 'react'
import styled from '@emotion/styled'

import { 
	SectionBase,
	SectionContent,
	SectionLeftColumn,
	SectionRightColumn,
	SectionTextContent
 } from '../commonstyles'

 import SponsorLogos from './sponsorlogos.js';

const Container = styled('div')`
	${SectionBase};
	font-family: 'Montserrat-Bold';
	color: #FFFFFF;
	font-size: 48px;
	text-align: center;
`;

class Sponsors extends React.Component {
	render () {
		return (
			<Container>
				Sponsors
				<SectionContent columns={true}>
			      <SectionLeftColumn>
			        <SectionTextContent>
			          <p>All club operations are funded by our generous sponsors. 
			          Without their support, we would not be able to do what we do, 
			          or be what we are today: a major hub for learning and community 
			          in the Montreal AI ecosystem. </p>
			          <p> As a McGill AI club sponsor, you will have access to the resumes of our hackathon participants, 
			          hold interviews during the hackathon, and gain access to a platform of over 2000 talented 
			           and committed students. </p>
			           <p> If you are interested in partnering with our club, 
			           please don’t hesitate to reach out to mcgillaicontact@gmail.com.!</p>
			        </SectionTextContent>
			      </SectionLeftColumn>
			      <SectionRightColumn>
			        <SponsorLogos />
			      </SectionRightColumn>
			    </SectionContent>
			</Container>
		);
	}
}

export default Sponsors