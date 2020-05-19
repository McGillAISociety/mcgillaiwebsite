import React from 'react'
import styled from '@emotion/styled'

import { SectionBase,
		 HeadingUnderline,
		 Question,
		 Answer} from '../commonstyles.js';

import Background from '../home/assets/background.jpg';

const Container = styled('div')`
  	background-image: url(${Background});
  	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
 	background-repeat: no-repeat;
  	padding-top: 125px;
  	padding-left: 70px;

  	@media only screen and (max-width: 767px) {
	    padding-left: 20px;
    }
`;

const MtlaiContainer = styled('div')`
	${SectionBase({
    heightPx: 600
  	})};
  	box-sizing: border-box;

		font-family: 'Montserrat-Bold';
		color: #FFFFFF;
		font-size: 48px;
		text-align: center;
`;

class Mtlai extends React.Component {
	render () {
		return (
			<Container>
				<MtlaiContainer>
					<HeadingUnderline className='content'>Montreal AI Resources </HeadingUnderline>
					<div className = 'content--inner'>
					<p>Welcome to our guide!</p>
					<Answer>
						This page is coming soon!
					</Answer>

					<Question>Get in touch</Question>
					<Answer>
						Reach out at <a href="mailto:mcgillaicontact@gmail.com">mcgillaicontact@gmail.com</a> and a member of our exec team will be in touch!
					</Answer>
					</div>
				</MtlaiContainer>
			</Container>
		);
	}
}

export default Mtlai
